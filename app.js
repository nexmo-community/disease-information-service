const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      config      = require('./config/config');

// Models
const Sms         = require('./models/sms'),
      Commands    = require('./models/commands');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
