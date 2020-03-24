const config = require('../config/config');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: config.vonageApiKey,
  apiSecret: config.vonageApiSecret,
  applicationId: config.vonageApplicationId,
  privateKey: config.vonagePrivateKey
});

class Sms {

  /**
   * @desc Sends an SMS using Nexmo API
   * @param {String} fromNumber
   * @param {String} toNumber
   * @param {String} message
   * @pre: fromNumber, toNumber, and message contain data
   * @post: Send an SMS if all data is valid, otherwise don't send SMS
   */
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
            const errMsg = responseData.messages[0]['error-text'];
            console.log(`Message failed with error: ${errMsg}`);
          }
        }
      }
    );
  }

}

module.exports = Sms;
