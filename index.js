'use strict';

// Imports dependencies and set up http server
const
requestify= require('requestify'),

  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server
  Token='EAAFhHsMzRT0BAJuptKg7shXUjIWchP0OKFOZA5KVPE3b3N8n60FAgBAHGZAYGvG284M8An7e1WXZBBoZCwW7UhFT1XadnuAmVSx4pzZCyHH18Nv6dAjVVFXafc2QXjs7geXJxNKNMvweJjHjdfDexZCclztuyHJsUyS0CSTG2rPqAhu2DS8prt';

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
	  
	  var senderID = webhook_event.sender.id;
	  console.log('senderID',senderID);
	  if(webhook_event.postback){
	  var userReply =webhook_event.postback.payload;
	  console.log('reply', userReply);
	  }
	  if(webhook_event.message){if(webhook_event.message.text){
	  var userCmt= webhook_event.message.text;
	  console.log('userText',userCmt);
	  }
	  if(webhook_event.message.attachments){
	  var userPhoto=webhook_event.message.attachments;
	  console.log('userImage',userPhoto);
	  }}
	  
	 
	  //if(userReply==''){
	  //}
	  
	  
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});