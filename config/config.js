require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  secretOrKey: process.env.SECRET_OR_KEY,
  nexmoNumber: process.env.NEXMO_NUMBER,
  nexmoApiKey: process.env.NEXMO_API_KEY,
  nexmoApiSecret: process.env.NEXMO_API_SECRET,
  nexmoPrivateKeyFilePath: process.env.PRIVATE_KEY_FILE_PATH,
  nexmoApplicationId: process.env.NEXMO_APPLICATION_ID,
  production: process.env.PRODUCTION
};

