const fetch     = require('node-fetch'),
      JSSoup    = require('jssoup').default,
      config    = require('../config/config'),
      K         = require('../utilities/constants'),
      Sms       = require('./sms'),
      Cases = require('./cases'),
      handleSmsReply = require('../utilities/smsReply');

class Commands {

  static handleCommand({toNumber, fromNumber, command} = {}) {
    switch (command) {

      case K.cmds.commands.cmd:
        this.commands({ to: toNumber, from: fromNumber });
        break;

      case K.cmds.cases.cmd:
        handleSmsReply({ 
          to: toNumber, 
          from: fromNumber, 
          message: K.cmds.cases.info
        });
        break;

      case K.cmds.cases.countries.China.cmd:
        Cases.getCases({ 
          to: toNumber, 
          from: fromNumber, 
          country: 'China'
        });
        break;

      case K.cmds.cases.countries.Italy.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Italy'
        });
        break;

      case K.cmds.cases.countries.Iran.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Iran'
        });
        break;

      case K.cmds.cases.countries.Spain.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Spain'
        });
        break;

      case K.cmds.cases.countries.Germany.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Germany'
        });
        break;

      case K.cmds.cases.countries.France.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'France'
        });
        break;

      case K.cmds.cases.countries.SouthKorea.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'South Korea'
        });
        break;

      case K.cmds.cases.countries.Switzerland.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Switzerland'
        });
        break;

      case K.cmds.cases.countries.Netherlands.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Netherlands'
        });
        break;

      case K.cmds.cases.countries.Austria.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Austria'
        });
        break;

      case K.cmds.cases.countries.Belgium.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Belgium'
        });
        break;

      case K.cmds.cases.countries.Norway.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Norway'
        });
        break;
        
      case K.cmds.cases.countries.Sweden.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Sweden'
        });
        break;

      case K.cmds.cases.countries.Denmark.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Denmark'
        });
        break;

      case K.cmds.cases.countries.Japan.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Japan'
        });
        break;

      case K.cmds.cases.countries.Malaysia.cmd:
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'Malaysia'
        });
        break;

      case K.cmds.cases.countries.UnitedStates.cmd:
        Cases.US({ to: toNumber, from: fromNumber });
        break;

      case K.cmds.cases.countries.UnitedKingdom.cmd: 
        Cases.getCases({
          to: toNumber,
          from: fromNumber,
          country: 'United Kingdom'
        });
        break;

      case K.cmds.coronavirus.cmd:
        handleSmsReply({ 
          to: toNumber, 
          from: fromNumber, 
          message: K.cmds.coronavirus.info 
        });
        break;

      case K.cmds.protectYourself.cmd: 
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectYourself.info
        });
        break;

      case K.cmds.protectYourself.cleanHands.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectYourself.cleanHands.info
        });
        break;

      case K.cmds.protectYourself.avoidCloseContact.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectYourself.avoidCloseContact.info
        });
        break;

      case K.cmds.protectOthers.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectOthers.info
        });
        break;

      case K.cmds.protectOthers.sick.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectOthers.sick.info
        })
        break;

      case K.cmds.protectOthers.cover.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectOthers.cover.info
        })
        break;

      case K.cmds.protectOthers.facemask.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectOthers.facemask.info
        });
        break;

      case K.cmds.protectOthers.cleanAndDisinfect.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.protectOthers.cleanAndDisinfect.info
        });
        break;

      case K.cmds.symptoms.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.symptoms.info
        });
        break;

      case K.cmds.socialDistancing.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.socialDistancing.info
        });
        break;

      case K.cmds.socialDistancing.do.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.socialDistancing.do.info
        });
        break;

      case K.cmds.socialDistancing.dont.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.socialDistancing.dont.info
        });
        break;

      case K.cmds.reduceStigma.cmd:
        handleSmsReply({
          to: toNumber,
          from: fromNumber,
          message: K.cmds.reduceStigma.info
        });
        break;

      default: 
        console.log(`${command} is not a valid command.`);
        break;
    }
  }

  static commands({ to, from } = {}) {
    let message = '';
    Object.keys(K.cmds).map(function(key, index) {
      if (index < Object.keys(K.cmds).length - 1) {
        message += `${K.cmds[key].desc}\n\n`;
      } else {
        message += `${K.cmds[key].desc}`;
      }
    });
    handleSmsReply({
      to: to,
      from: from,
      message: message
    });
  }

}

module.exports = Commands;
