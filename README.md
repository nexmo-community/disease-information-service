# Instant-SMS-Alert
Instant-SMS-Alert is a demo project that utilizes an SMS API to retrieve instant updates on COVID-19 via SMS. The purpose of this project is to provide an example of how to implement an SMS alert/update system in response to disease epidemics. 

## Limitations
At the time of creating this project, no known APIs for updates on diseases cases are available; this project parses html from websites to retrieve data. The issue with using this method rather than being able to call an API means that the code relies on the websites used to maintain their structure of where specific elements are placed in the DOM.

## Prerequisites
- Install node.js
- Set up the app in the Vonage Communications API using the [SMS API](https://www.vonage.com/communications-apis/sms/)
- Install ngrok (if running locally). Refer to the [docs](https://ngrok.com/docs)
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
VONAGE_NUMBER = <your Vonage number>
VONAGE_API_KEY = <your Vonage api key>
VONAGE_API_SECRET = <your Vonage api secret>
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

## How to modify the code for your project
Here is an explanation of some of the project files and to modify them for your own use.

### utilities/constants.js
These are constants that hold commands that are read in from inbound messages. Commands are written in the following format:
```javascript
  <command>: {
    cmd: <The command that the user enters>,
    desc: <Describes what the command does>
  }
```

### models/commands.js
This file contains a function sendSms to take in the toNumber, fromNumber, and command message. The command message is then searched through a switch statement to see if the command is valid or not. Using the constants file, the switch statement can be modified as follows:
```javascript
switch(command) {
  case K.<Your new command>.cmd:
    // Statements to execute when the
    // command is found.
    break;
}
```

### utilities/sources.js
These are constants for the sources used to retrieve data. Sources are written in the following format:
```javascript
  <source name>: {
    html: <URL of the data to be fetched>,
    source: <source name>
  }
```

### models/cases.js
This file uses jssoup to parse html. The function sendSms takes in a fromNumber, toNumber, source, and country to retrieve data then issue an SMS message. The source is used in the switch statement to identify which instructions to execute next. Using the sources file, the switch statement can be modified as follows:
```javascript
switch(source) {
  case sources.<Your source name>.html:
    fetch(sources.<Your source name>.html)
      .then(response => response.text())
      .then(html => {
        let soup = new JSSoup(html);

        // Add statements to fetch the data
      })
      .catch(err => {
        console.log(err);
      });
    break;
}
```

## Built With
- Vonage Communications API
- Node.js, Express.js

## License
[MIT license](LICENSE)
