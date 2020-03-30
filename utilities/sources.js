// How to modify for own use:
//
// This file contains the sources that are used to
// parse data from. html is the link that is referenced,
// and source is who owns the html.
//
// Note: Links cannot be used in the source attribute
// because they will eventually be blocked in SMS 
// messages.

const sources = {
  cdc: {
    html: 'https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html',
    source: 'CDC'
  },
  ncov: {
    html: 'https://ncov2019.live/data',
    source: 'NCOV2019'
  }
}

module.exports = sources;
