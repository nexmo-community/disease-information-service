// How to modify for own use:
//
// Add commands to the constants file and then add the 
// command execution in the switch statement. For cases, 
// fromNumber and toNumber should be passed to know where 
// to send the SMS, source is the url to be parsed for 
// data, and country is the specified country to look for.
//
// Note: This code does not feature every country and sources used
// may not be completely accurate.

const fetch           = require('node-fetch'),
      JSSoup          = require('jssoup').default,
      config          = require('../config/config'),
      Sms             = require('./sms'),
      Cases           = require('./cases'),
      // K represents constant variables
      K               = require('../utilities/constants'),
      sources         = require('../utilities/sources');

// This class handles various SMS commands. If the sender's 
// message matches any of the commands in the switch 
// statements, the statements following would be executed, 
// otherwise the console will display that the message was 
// not a valid command.
class Commands {

  static sendSms({ fromNumber, toNumber, command } = {}) {
    let message = '';

    switch (command) {
      case K.commands.cmd:
        // Sends a list of commands available.
        message = '';
        // Gets all key values in the K variable and adds them into
        // the message variable.
        Object.keys(K).map(function(key, index) {
          if (index < Object.keys(K).length - 1) {
            message += `${K[key].desc}\n\n`;
          } else {
            message += `${K[key].desc}`;
          }
        });
        // Send the list of commands
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.cases.cmd:
        message = K.cases.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.cases.countries.UnitedKingdom.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.UnitedKingdom.source,
          country: 'United Kingdom'
        });
        break;

      case K.cases.countries.UnitedStates.cmd:
        Cases.sendSms({
          fromNumber,
          toNumber,
          source: K.cases.countries.UnitedStates.source, 
          country: 'United States'
        });
        break;

      case K.cleanHands.cmd:
        message = K.cleanHands.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.washHands.cmd:
        message = K.washHands.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      default: 
        console.log(`${command} is not a valid command.`);
        break;
    }
  }

}

module.exports = Commands;
