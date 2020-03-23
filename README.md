# Instant-SMS-Alert
Instant-SMS-Alert is a project that utilizes an SMS API to retrieve instant updates on COVID-19 via SMS. The purpose of this project is to provide an example of how to implement an SMS alert/update system in response to disease epidemics.

## Getting Started

### Prerequisites
- Install node.js
- Install ngrok
- Set up the app in the Vonage Communications API 

### Installing (for developers)
Clone the source locally and cd into the project.
```
$ cd Instant-SMS-Alert
```

Install project dependencies.
```
$ npm install
```

Create .env file.
```
$ touch .env
```

Configure environment variables in .env file.
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

Run the app 
```
npm run dev
```

## Built With
- Vonage Communications API
- Node.js, Express.js

## License
MIT
