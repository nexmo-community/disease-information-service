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
      // Fetch data using the cdc source
      case sources.cdc.html: 
        fetch(sources.cdc.html)
          .then(response => response.text())
          .then(html => {
            let soup = new JSSoup(html);

            // Fetch data
            const row = soup.findAll('li');
            let cases = '';
            let deaths = '';

            // Look for cases and deaths data. It is expected
            // that deaths should be listed after cases.
            for (let i = 0; i < row.length; i++) {
              const rowText = row[i].text;

              if (rowText.search('Total cases') >= 0) {
                cases = rowText;
              }
              if (rowText.search('Total deaths') >= 0) {
                deaths = rowText;
              }

              // Check if data already found, then end for loop
              if (cases !== '' && deaths !== '') {
                break;
              }
            }

            // Create message depending on the data found
            if (cases === '' && deaths === '') {
              message = 'Data was not found.';
            } else {
              message = `COVID-19: U.S. at a Glance\n\
${cases}\n\
${deaths}\n\
Source: ${sources.cdc.source}`;
            }

            // Send an SMS message
            Sms.sendSms({ fromNumber, toNumber, message });
          })
          .catch(err => {
            console.log(err);
          });
        break;

      // Fetch data using the ncov source
      case sources.ncov.html:
        fetch(sources.ncov.html)
          .then(response => response.text())
          .then(html => {
            let soup = new JSSoup(html);

            // Check the table headers to get positions of confirmed, 
            // deceased, recovered, and serious cases.
            const headers = soup.findAll('th');

            // Initialize all to -1, meaning position was not found
            let namePos = -1, 
                confirmedPosFromName = -1, 
                deceasedPosFromName = -1, 
                recoveredPosFromName = -1, 
                seriousPosFromName = -1;

            // Search values by looping through each item
            for (let i = 0; i < headers.length; i++) {
              const headerText = headers[i].text;

              if (headerText.search('Name') >= 0) {
                namePos = i;
              } else if (headerText.search('Confirmed') >= 0) {
                confirmedPosFromName = i - namePos;
              } else if (headerText.search('Deceased') >= 0) {
                deceasedPosFromName = i - namePos;
              } else if (headerText.search('Recovered') >= 0) {
                recoveredPosFromName = i - namePos;
              } else if (headerText.search('Serious') >= 0) {
                seriousPosFromName = i - namePos;
              }

              // If all values found, end for loop
              if (namePos !== -1 && 
                confirmedPosFromName !== -1 && 
                deceasedPosFromName !== -1 && 
                recoveredPosFromName !== -1 && 
                seriousPosFromName !== -1) {
                  break;
              }
            }

            // Search table data for specified country
            const rows = soup.findAll('td');
            for (let i = 0; i < rows.length; i++) {
              const rowText = rows[i].text;
              const countryIndex = rowText.search(country);
              if (countryIndex >= 0) {
                // Gather data for SMS. Confirmed is expected to be after
                // the country index. Deceased is expected to be 4 spots after,
                // recovered 7 spots, and serious 8 spots.
                let confirmed = '', 
                    deceased = '', 
                    recovered = '', 
                    serious = '';

                // Update the case text if the position is valid
                if (confirmedPosFromName !== -1) {
                  confirmed = rows[i + confirmedPosFromName].text;
                }
                if (deceasedPosFromName !== -1) {
                  deceased = rows[i + deceasedPosFromName].text;
                }
                if (recoveredPosFromName !== -1) {
                  recovered = rows[i + recoveredPosFromName].text;
                }
                if (seriousPosFromName !== -1) {
                  serious = rows[i + seriousPosFromName].text;
                }

                // Create message
                if (confirmedPosFromName === -1 && 
                  deceasedPosFromName === -1 && 
                  recoveredPosFromName === -1 && 
                  seriousPosFromName === -1) {
                    message = 'Data not found.'
                } else {
                  message = `COVID-19: ${country}\n\
Confirmed Cases: ${confirmed.replace(/\s+/g, '')}\n\
Deceased: ${deceased.replace(/\s+/g, '')}\n\
Recovered: ${recovered.replace(/\s+/g, '')}\n\
Serious: ${serious.replace(/\s+/g, '')}\n\n\
Source: ${sources.ncov.source}`;
                }

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
