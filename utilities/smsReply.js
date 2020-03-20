const Sms = require('../models/sms');

function handleSmsReply({to, from, message} = {}) {
  const toNumber = from;
  const fromNumber = to;
  console.log(`to number: ${toNumber}`);
  console.log(`from number: ${fromNumber}`);
  Sms.sendSms({
    fromNumber: fromNumber,
    toNumber: toNumber,
    message: message
  });
}

module.exports = handleSmsReply;
