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
        message = '';
        Object.keys(K).map(function(key, index) {
          if (index < Object.keys(K).length - 1) {
            message += `${K[key].desc}\n\n`;
          } else {
            message += `${K[key].desc}`;
          }
        });
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.cases.cmd:
        message = K.cases.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.cases.countries.Australia.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Australia.source,
          country: 'Australia' 
        });
        break;

      case K.cases.countries.Austria.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Austria.source,
          country: 'Austria' 
        });
        break;

      case K.cases.countries.Belgium.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Belgium.source,
          country: 'Belgium' 
        });
        break;

      case K.cases.countries.Brazil.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Brazil.source,
          country: 'Brazil' 
        });
        break;

      case K.cases.countries.Canada.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Canada.source,
          country: 'Canada' 
        });
        break;

      case K.cases.countries.Chile.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Chile.source,
          country: 'Chile' 
        });
        break;

      case K.cases.countries.China.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.China.source,
          country: 'China' 
        });
        break;

      case K.cases.countries.CzechRepublic.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.CzechRepublic.source,
          country: 'Czech Republic' 
        });
        break;

      case K.cases.countries.Denmark.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Denmark.source,
          country: 'Denmark' 
        });
        break;

      case K.cases.countries.Estonia.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Estonia.source,
          country: 'Estonia' 
        });
        break;

      case K.cases.countries.Finland.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Finland.source,
          country: 'Finland' 
        });
        break;

      case K.cases.countries.France.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.France.source,
          country: 'France' 
        });
        break;

      case K.cases.countries.Germany.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Germany.source,
          country: 'Germany' 
        });
        break;

      case K.cases.countries.Greece.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Greece.source,
          country: 'Greece' 
        });
        break;

      case K.cases.countries.Iran.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Iran.source,
          country: 'Iran' 
        });
        break;

      case K.cases.countries.Ireland.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Ireland.source,
          country: 'Ireland' 
        });
        break;

      case K.cases.countries.Israel.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Israel.source,
          country: 'Israel' 
        });
        break;

      case K.cases.countries.Italy.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Italy.source,
          country: 'Italy' 
        });
        break;

      case K.cases.countries.Japan.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Japan.source,
          country: 'Japan' 
        });
        break;

      case K.cases.countries.Malaysia.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Malaysia.source,
          country: 'Malaysia' 
        });
        break;

      case K.cases.countries.Netherlands.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Netherlands.source,
          country: 'Netherlands' 
        });
        break;

      case K.cases.countries.Norway.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Norway.source,
          country: 'Norway' 
        });
        break;

      case K.cases.countries.Pakistan.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Pakistan.source,
          country: 'Pakistan' 
        });
        break;

      case K.cases.countries.Poland.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Poland.source,
          country: 'Poland' 
        });
        break;

      case K.cases.countries.Portugal.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Portugal.source,
          country: 'Portugal' 
        });
        break;

      case K.cases.countries.Qatar.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Qatar.source,
          country: 'Qatar' 
        });
        break;

      case K.cases.countries.Romania.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Romania.source,
          country: 'Romania' 
        });
        break;

      case K.cases.countries.SaudiArabia.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.SaudiArabia.source,
          country: 'Saudi Arabia' 
        });
        break;

      case K.cases.countries.Singapore.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Singapore.source,
          country: 'Singapore' 
        });
        break;

      case K.cases.countries.Slovenia.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Slovenia.source,
          country: 'Slovenia' 
        });
        break;

      case K.cases.countries.SouthKorea.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.SouthKorea.source,
          country: 'South Korea' 
        });
        break;

      case K.cases.countries.Spain.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Spain.source,
          country: 'Spain' 
        });
        break;

      case K.cases.countries.Sweden.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Sweden.source,
          country: 'Sweden' 
        });
        break;

      case K.cases.countries.Switzerland.cmd:
        Cases.sendSms({ 
          fromNumber,
          toNumber,
          source: K.cases.countries.Switzerland.source,
          country: 'Switzerland' 
        });
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

      case K.coronavirus.cmd:
        message = K.coronavirus.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectYourself.cmd: 
        message = K.protectYourself.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectYourself.cleanHands.cmd:
        message = K.protectYourself.cleanHands.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectYourself.avoidCloseContact.cmd:
        message = K.protectYourself.avoidCloseContact.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectOthers.cmd:
        message = K.protectOthers.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectOthers.sick.cmd:
        message = K.protectOthers.sick.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectOthers.cover.cmd:
        message = K.protectOthers.cover.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectOthers.facemask.cmd:
        message = K.protectOthers.facemask.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.protectOthers.cleanAndDisinfect.cmd:
        message = K.protectOthers.cleanAndDisinfect.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.symptoms.cmd:
        message = K.symptoms.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.socialDistancing.cmd:
        message = K.socialDistancing.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.socialDistancing.do.cmd:
        message = K.socialDistancing.do.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.socialDistancing.dont.cmd:
        message = K.socialDistancing.dont.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      case K.reduceStigma.cmd:
        message = K.reduceStigma.info;
        Sms.sendSms({ fromNumber, toNumber, message });
        break;

      default: 
        console.log(`${command} is not a valid command.`);
        break;
    }
  }

}

module.exports = Commands;
