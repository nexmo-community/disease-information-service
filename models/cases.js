// How to modify for own use:
//
// Add a source to the switch statement that will parse 
// the information needed. JSSoup is needed to parse the 
// html and obtain the text that is needed to create the 
// message.

const fetch   = require('node-fetch'),
      JSSoup  = require('jssoup').default,
      Sms     = require('./sms'),
      sources = require('../utilities/sources');

// This class parses html from another website to obtain 
// information. The information obtained is then used to 
// create an SMS message.
class Cases {

  // Sends an SMS for cases of a specified country using
  // a specified source. Since at the time of writing,
  // there are no known APIs to access real-time updates,
  // data is fetched by parsing html.
  static sendSms({ fromNumber, toNumber, source, country } = {}) {
    let message = '';
    switch(source) {
      case sources.cdc.html: 
        fetch(sources.cdc.html)
          .then(response => response.text())
          .then(html => {
            let soup = new JSSoup(html);

            // Fetch data
            const row = soup.findAll('li');

            // Look for cases and deaths data. It is expected
            // that deaths should be listed after cases.
            for (let i = 0; i < row.length; i++) {
              const cases = row[i].text;
              const deaths = row[i + 1].text;

              if (cases.search('Total cases') >= 0 && deaths.search('Total deaths') >= 0) {
                message = `COVID-19: U.S. at a Glance\n\
${cases}\n\
${deaths}\n\
Source: ${sources.cdc.source}`;

                // Send SMS and end function call
                Sms.sendSms({ fromNumber, toNumber, message });
                return;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;

      case sources.ncov.html:
        fetch(sources.ncov.html)
          .then(response => response.text())
          .then(html => {
            let soup = new JSSoup(html);

            // Search table dat for specified country
            const rows = soup.findAll('td');
            for (let i = 0; i < rows.length; i++) {
              const rowText = rows[i].text;
              const countryIndex = rowText.search(country);
              if (countryIndex >= 0) {
                // Gather data for SMS. Confirmed is expected to be after
                // the country index. Deceased is expected to be 4 spots after,
                // recovered 7 spots, and serious 8 spots.
                const confirmed = rows[i + 1].text || '';
                const deceased = rows[i + 4].text || '';
                const recovered = rows[i + 7].text || '';
                const serious = rows[i + 8].text || '';

                // Create message
                message = `COVID-19: ${country}\n\
Confirmed Cases: ${confirmed.replace(/\s+/g, '')}\n\
Deceased: ${deceased.replace(/\s+/g, '')}\n\
Recovered: ${recovered.replace(/\s+/g, '')}\n\
Serious: ${serious.replace(/\s+/g, '')}\n\n\
Source: ${sources.ncov.source}`;

                // Send SMS and end function call
                Sms.sendSms({ fromNumber, toNumber, message });
                return;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;

      default: 
        console.log(`${source} was not found.`);
        break;
    }
  }

}

module.exports = Cases;
