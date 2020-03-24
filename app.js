const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      config      = require('./config/config');

const handleSmsReply = require('./utilities/smsReply');
      Commands       = require('./models/commands');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/number', (req, res) => {
  const fromNumber = req.body.phoneNumber;
  console.log(`Number entered: ${fromNumber}`);

  const toNumber = config.vonageNumber;
  const messageToSend = 'Welcome to this app!\nReply !commands to see a list of commands.\nReply !cases to view the number of cases around the world.';

  handleSmsReply({
    to: toNumber,
    from: fromNumber,
    message: messageToSend
  });

  res.redirect('/');
});

app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms);

// Executed when an Sms is sent from a regular phone number 
// to a virtual number.
function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body);
  console.log(params);

  const toNumber = params.to;
  const fromNumber = params.msisdn;
  const message = params.text;

  console.log(`toNumber: ${toNumber}`);
  console.log(`fromNumber: ${fromNumber}`);
  console.log(`message: ${message}`);

  Commands.handleCommand({ 
    toNumber: toNumber,
    fromNumber: fromNumber,
    command: message
  });

  response.status(204).send();
};

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
