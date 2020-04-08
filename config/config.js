// How to use:
//
// Create a .env file at the top level directory and assign values
// to the following environment variables below.

require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  vonageNumber: process.env.VONAGE_NUMBER,
  vonageApiKey: process.env.VONAGE_API_KEY,
  vonageApiSecret: process.env.VONAGE_API_SECRET,
  production: process.env.PRODUCTION || 'development'
};

