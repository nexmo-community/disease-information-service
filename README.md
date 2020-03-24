# Instant-SMS-Alert
Instant-SMS-Alert is a demo project that utilizes an SMS API to retrieve instant updates on COVID-19 via SMS. The purpose of this project is to provide an example of how to implement an SMS alert/update system in response to disease epidemics.

## Prerequisites
- Install node.js
- Set up the app in the Vonage Communications API 
- Install ngrok (if running locally)
- Heroku account (if running remotely on Heroku)

## Running this demo locally on your machine
1. Clone the source locally and cd into the project.
```
$ git clone <clone with https url>
$ cd Instant-SMS-Alert
```

2. Install project dependencies.
```
$ npm install
```

3. Create .env file.
```
$ touch .env
```

4. Configure environment variables in .env file.
```
PORT = <port number>
SECRET_OR_KEY = <secret or key>
VONAGE_NUMBER = <your Vonage number>
VONAGE_API_KEY = <your Vonage api key>
VONAGE_API_SECRET = <your Vonage api secret>
PRIVATE_KEY_FILE_PATH = <path to your private key generated>
VONAGE_APPLICATION_ID = <your Vonage application id>
PRODUCTION = <production type>
```

5. Start ngrok
```
ngrok http <port number>
```

6. Link your Vonage number to the /webhooks/inbound-sms webhook endpoint.

7. Run the app 
```
npm run dev
```

8. View the demo project on the browser
Go to http://localhost:<port number> and type your phone number.

## Running this demo remotely on Heroku
1. Create a new app on Heroku.

2. Fork this repository.

3. Connecting your Github account to your app on Heroku.

4. Choose a branch to deploy and start the deploy process.

5. Configure environment variables.

6. Link your Vonage number to the /webhooks/inbound-sms webhook endpoint.

7. Go to the app url and type your phone number.

## Built With
- Vonage Communications API
- Node.js, Express.js

## License
MIT
