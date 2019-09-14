'use strict';

// Imports dependencies and set up http server
const
requestify= require('requestify'),

  express = require('express'),
  bodyParser = require('body-parser'),
  PageAccessToken='EAAFhHsMzRT0BAJuptKg7shXUjIWchP0OKFOZA5KVPE3b3N8n60FAgBAHGZAYGvG284M8An7e1WXZBBoZCwW7UhFT1XadnuAmVSx4pzZCyHH18Nv6dAjVVFXafc2QXjs7geXJxNKNMvweJjHjdfDexZCclztuyHJsUyS0CSTG2rPqAhu2DS8prt',
  app = express().use(bodyParser.json());
 requestify.post('https://graph.facebook.com/v2.6/me/messenger_profile?access_token='+PageAccessToken,
 { "get_started":{"payload":"Hi"},
 "persistent_menu":[
 {
	"locale": "default",
	"composer_input_disabled": false,
	"call_to_actions":[
	{
		"type": "postback",
		"title": "Home",
		"payload": "Hi"
	},
	{
		"type": "web_url",
		"title": "Visit Page",
		"url": "https://mym-acavxb.firebaseapp.com/index.html",
		"webview_height_ratio": "tail"
		}
	]
}
]
}).then(function(success){
	console.log('getting_menu.success');
})
  

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.get('/', (req, res)=>{
	res.send("Hello vro!");
})


// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "388259728540989"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
	  
	  
	  
	  
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});