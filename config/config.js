require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  secretOrKey: process.env.SECRET_OR_KEY,
  vonageNumber: process.env.VONAGE_NUMBER,
  vonageApiKey: process.env.VONAGE_API_KEY,
  vonageApiSecret: process.env.VONAGE_API_SECRET,
  vonagePrivateKeyFilePath: process.env.PRIVATE_KEY_FILE_PATH,
  vonageApplicationId: process.env.VONAGE_APPLICATION_ID,
  production: process.env.PRODUCTION
};

