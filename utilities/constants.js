// How to modify for own use:
//
// This file contains the commands that are used for
// inbound SMS messages. The command is written as
// follows:
//
// <command>: {
//  cmd: <The command that the user enters>,
//  desc: <Describes what the command does>
// }

const sources = require('./sources');

const constants = {

  commands: {
    cmd: '!commands',
    desc: '!commands -- Lists all commands available.',
  },

  cases: {
    cmd: '!cases',
    desc: '!cases -- Lists number of cases around the world.',
    info: '!cases-UK -- Lists number of cases in United Kingdom.\n\n\
!cases-US -- Lists number of cases in United States.\n\n\
',
    countries: {
      UnitedKingdom: { cmd: '!cases-UK', source: sources.ncov.html },
      UnitedStates: { cmd: '!cases-US', source: sources.cdc.html },
    }
  },

  cleanHands: {
    cmd: '!clean-hands',
    desc: '!clean-hands -- Shows how to clean your hands.',
    info: 'Clean your hands often\n\
- Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.\n\
- If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.\n\
- Avoid touching your eyes, nose and mouth with unwashed hands.\n\n\
Source: CDC'
  },

  washHands: {
    cmd: '!wash-hands',
    desc: '!wash-hands -- Lists steps to wash your hands properly.',
    info: 'Wash your hands properly\n\
1. Wet hands with water\n\
2. Apply enough soap to cover all hand surfaces\n\
3. Rub hands palm to palm\n\
4. Right palm over left dorsum with interlaced fingers and vice versa\n\
5. Palm to palm with fingers interlaced\n\
6. Backs of fingers to opposing palms with fingers interlocked\n\
7. Rotational rubbing of left thumb clasped in right palm and vice versa\n\
8. Rotational rubbing, backwards and forwards with clapsed fingers of right hand in left palm and vice versa\n\
9. Rinse hands with water\n\
10. Dry thoroughly with a single use towel\n\
11. Use towel to turn off faucet\n\n\
Source: WHO'
  }

};

module.exports = constants;
