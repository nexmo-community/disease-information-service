const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      config      = require('./config/config');

const Commands  = require('./models/commands'),
      Sms       = require('./models/sms');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Renders the index.html file
app.get('/', (req, res) => {
  res.render('index');
});

// Retrieves the phone number entered from index.html
app.post('/number', (req, res) => {
  // Logging the number entered for debugging purposes
  console.log(`Number entered: ${req.body.phoneNumber}`);

  // Configure message to be sent to the phone number entered
  // from the Vonage number.
  const toNumber = req.body.phoneNumber;
  const fromNumber = config.vonageNumber;
  const message = 'Welcome to this app!\nReply !commands to see a list of commands.\nReply !cases to view the number of cases around the world.';

  // Send SMS message
  Sms.sendSms({ fromNumber, toNumber, message });
  
  // Redirect to index route after post request completes
  res.redirect('/');
});

// Inbound SMS endpoint
app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms);

// Executed when an Sms is sent from a regular phone 
// number to a virtual number.
function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body);
  console.log(params);

  // Retrieve message information
  const recipient = params.to;
  const sender = params.msisdn;
  const command = params.text;

  // Log message details for debugging purposes
  console.log(`${sender} sent a message to ${recipient}: ${command}`);

  // Now a message is going to be sent to the sender from
  // the recipient. The fromNumber is a Vonage number.
  const toNumber = sender;
  const fromNumber = recipient;

  // Checks the command is valid then sends the SMS.
  Commands.sendSms({ fromNumber, toNumber, command });

  response.status(204).send();
};

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
