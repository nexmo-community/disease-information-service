const Nexmo = require('nexmo'),
      config = require('../config/config');

const nexmo = new Nexmo({
  apiKey: config.vonageApiKey,
  apiSecret: config.vonageApiSecret,
  applicationId: config.vonageApplicationId,
  privateKey: config.vonagePrivateKey
});

class Sms {

  // Sends an SMS using Vonage API.
  // fromNumber, toNumber, and message must all contain 
  // data. If data was valid, an SMS is sent, otherwise 
  // an error occurs.
  static sendSms({fromNumber, toNumber, message} = {}) {
    if (!fromNumber && !toNumber && !message) { return; }

    nexmo.message.sendSms(
      fromNumber,
      toNumber,
      message,
      { type: 'unicode' },
      (err, responseData) => {
        if (err) {
          console.log(`Error sending SMS: ${err}`);
        } else {
          console.log(responseData.messages);

          if (responseData.messages[0]['status'] === '0') {
            // Message was sent successfully
          } else {
            // Message unable to send
            const errMsg = responseData.messages[0]['error-text'];
            console.log(`Message failed with error: ${errMsg}`);
          }
        }
      }
    );
  }

}

module.exports = Sms;
