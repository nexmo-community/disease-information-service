const fetch   = require('node-fetch'),
      JSSoup  = require('jssoup').default,
      Sms     = require('./sms'),
      sources = require('../utilities/sources'),
      handleSmsReply = require('../utilities/smsReply');

class Cases {

  static getCases({ to, from, country } = {}) {
    if (!to || !from) { return; }

    fetch(sources.ncov.html)
      .then(response => response.text())
      .then(html => {
        let soup = new JSSoup(html);
        const rows = soup.findAll('td');
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].text === country) {
            const confirmed = rows[i + 1].text || '';
            const deceased = rows[i + 2].text || '';
            const recovered = rows[i + 3].text || '';
            const serious = rows[i + 4].text || '';

            const message = `COVID-19: ${country}\n\
Confirmed Cases: ${confirmed}\n\
Deceased: ${deceased}\n\
Recovered: ${recovered}\n\
Serious: ${serious}\n\n\
Source: ${sources.ncov.source}`;

            if (message) {
              handleSmsReply({ 
                to: to, 
                from: from, 
                message: message 
              });
              return;
            }
          }
        }
      })
      .catch(err => console.log(err));
  }

  /**
   * @desc Retrieves data for US using url.
   * @param {String} fromNumber
   * @pre: fromNumber is a valid number
   * @post: SMS is sent using the Nexmo API
   */
  static US({to, from} = {}) {
    if (!to || !from) { return; }
    fetch(sources.cdc.html)
      .then(response => response.text())
      .then(html => {
        let soup = new JSSoup(html);
        const row = soup.findAll('li');
        const cases = row[10].text;
        const deaths = row[11].text;
        const message = `COVID-19: U.S. at a Glance\n\
${cases}\n\
${deaths}\n\
Source: ${sources.cdc.source}`;
        handleSmsReply({
          to: to,
          from: from,
          message: message
        });
      })
      .catch(err => console.log(err));
  }

}

module.exports = Cases;
