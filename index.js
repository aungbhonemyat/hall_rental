
'use strict';

// Imports dependencies and set up http server
const
  requestify= require('requestify'),
  express = require('express'),
  bodyParser = require('body-parser'),
  PageAccessToken='EAAFYRyzpU1IBAHNwh0nZCbZBxZBzgEuO7cjaxTCsGAJbeZCA2IZAgmiVb0c8AaVSJUJzrdwYTlekEFlcKgdH3hNRMsDJiPEtjney2BJK6vGH3u6HhoV3ZB2YK3ZB5vtLrza26ZBRJicn4ZC4RpRgq6t80p9Ng8fo8ZCmGZADLprfF2WcDZAZBTRp0nwb6',
  app = express().use(bodyParser.json());
  const sendmessageurl = 'https://graph.facebook.com/v5.0/me/messages?access_token='+PageAccessToken
  const admin = require('firebase-admin');

const serviceAccount = ({
  "type": "service_account",
  "project_id": "abmhallrental",
  "private_key_id": "f4e7dd0f26ce180663acde9c1563abe7af2d6146",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqMcoR6P0ivOBK\naa5sF1d3bKqBvYMMJ2eob8+fRz6NpyoQST+MUOJ5t/0wCM0m6l4LHwnOlMR0zWt7\nkixGacltStr4uRKTSjcQaoTkBAP0D/Vr5e0/n2Cc5n010RJcsgutuTT+BOoTHQgI\n74WpC7+uqYmuToYwtWvmGKHIpv25j2OkGvGXjTlxeChHnUsMgeq/kwsYuQwOjQBY\nSEoGWFwjzsCcmFzvDZRyv9r15G+e+PfQ0TeY/55AaeWwmh4ky7/wiW9MhvoRQ6sv\n3Ijk/brj0TZa4x5ZxYUL+jwsLeDW8H2G0hXIteqKzThyhtZp+MYuva7szSEYvdpM\niIV+4FTdAgMBAAECggEAMpLiA4ly8ygiFCqsQIV9IclCL5RzhSCOfnBfR2rhzTEP\n4FAL2LPOYLIKRARRhg9dy7s47FCrwjOqjUlF69SSnO4B/KfuO6Nxkmi8vY7t58/4\nM0xbQC0pheY97ciHRtFHhCOFejhWoEBfu1wFoVKS7qGFfqzp1j6K5hCKvrfUrJdR\nWqI6F1wq+Qm1Hy5sMxQwXCBlqCqKhStHwtsArEAgzECyycT7P8fmE9/cohIyQtI0\nkHSo++2PpV6uzE5ZHUx8f5BMw4RMuL3/VATM9e9hwfGUoF5sCc9Vxj8jLDCr/Db4\nCleCoiH/7jl/v8gqXKU+bChlbPmWrW1YPlruqg+cRwKBgQDjKlWjGOsEEUAwXjCo\n2jGlhHGH/7k7xoC9wc49zx2FqD5Bgp8MxdAkWq5zKn11SL4GGG7vfWKD7hhtCOnb\np6E5T5RmquNWbbmV9E9b0UfXqQL8J7U/SNg/f1xIefgTy0YovS7CXSMV0X3ywKdj\nbL9ihkm7myfkEdVzzesd8E7L1wKBgQC/zDRWFBLahMzFrZsLgscqLiBxj5TOwPmZ\n5CLjBXUY+u/R3YPA7OhB79tlwgTIsxipm+vSnqcod4dOWnG6ZjgxdYVW7YN7gWDR\nkQVpJEuk3RnK8B4ISXrhHF6gA8rjHJIo+E9fhMcx3oMVzW09dq3+n7GkBWHcEqqE\nJDLSRyOuawKBgQDYXx94nShlFGVWbLDedA3rwM4+orX1mKpRlAL03o0ZHNpHnboO\n+W+64ODe8y7Sgrn0plssI/qs/SEo4d+WCAHJy+HnNIgbb6Hgkfbw1tMeOG6ObOf3\nYlQPjykAI6TGfczSyvd5zCq6AnN7wELvscpNdulOF4gUdWQhzJZRSu5SuwKBgEdv\nLfr1ZQRAO+hQPZPu9HDwVyMUoA7VbuFzR88YJEHWjGW0xDKhyettA2EF/zQlCEV7\njjyW3JlE039KTltnYPyC0dPLiJICYOYMxmAfpZDUzJt6DSV3AK5BG7krUHCAHqvl\nt+JSmMIpJteC+HHQ9wMDxWzamFUYGqw2szsARfjbAoGASua3eHQ92Yxu5TiTgVUh\nBUKmt3QWcrLIWGCnKWL2WDppWeAKfS5WGJF4ZcBDdnetSlWjOZPkm1yQYkD4jn/s\nss+TD9acjaSk2ETvjnuTHTIThagiovAmANrWTNDy1q2UuA8FhUSuN68J1Oa9wKOY\n4my9DkkcsQW7GVf0/mGlNlw=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ytbyl@abmhallrental.iam.gserviceaccount.com",
  "client_id": "107468415357968802670",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ytbyl%40abmhallrental.iam.gserviceaccount.com"
  });
 admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
 const db = admin.firestore();
  
/*requestify.post('https://graph.facebook.com/v2.6/me/messenger_profile?access_token='+PageAccessToken,
      { "get_started": {"payload": "Hi"},      
        "persistent_menu": [{
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [{
                    "type": "postback",
                    "title": "Home",
                    "payload": "Hi"
                }]
        }],
      "greeting": [{
        "locale":"default",
        "text":"Hello {{user_first_name}}! \nPlease click on the Get started button to make the services joyful" 
      }]
})*/

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')  

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.get('/', (req, res)=>{
  res.send("Hello World");
})

app.get('/weddingReg/:id', function(req, res){
  res.render('wedding', { senderId: `${req.params.id}` })
})

app.get('/partyReg/:id', function(req, res){
  res.render('party', { senderId: `${req.params.id}` })
})

app.get('/seminarReg/:id', function(req, res){
  res.render('seminar', { senderId: `${req.params.id}` })
})

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  var VERIFY_TOKEN = "388259728540989"
    
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
    if(webhook_event.postback){
      var userInput = webhook_event.postback.payload;
      console.log('reply', userInput);
    }
    if(webhook_event.message){
      if(webhook_event.message.text){
      var userInput=webhook_event.message.text;
      console.log('userInput', userInput);
      }
    }

    //start
    //Welcome Message

  if(userInput == 'Hi' || userInput == 'Hi'){ 
    db.collection('Worker').where('ID', '==', `${senderID}`).get().then(function(result){
      if(result.empty){     
          console.log('empty relt')
          requestify.post(sendmessageurl,
            { 
              "recipient":{
              "id":senderID
              },
            "message":{
              "attachment":{
                "type":"template",
                  "payload": {
                  "template_type":"button",
                  "text":"Hello!! Welcome to Hall Rental Service.",
                  "buttons":[{
                    "type":"postback",
                    "title":"Guest",
                    "payload":"Guest"
                  },{
                    "type":"postback",
                    "title":"Host",
                    "payload":"Host"
                  }]
                }
              }
            }
          }).then(function(success){
            console.log('successful template');
          }).catch(function(error){
            console.log('error', error);  
          });
        }
         else {  
        requestify.post(sendmessageurl,
        {
          "recipient":{
            "id":senderID
        },
        "message":{
          "text":"Hi Admin ! What reports would you like to see?",
          "quick_replies":[
          {
            "content_type":"text",
            "title":"Event List",
            "payload":"eventlist"
          },
          {
            "content_type":"text",
            "title":"Guest List",
            "payload":"guestlist"
          }]
        }
        
      
    }).then(result=>{console.log("Ok")}).catch(err=>{console.log("err",err)})
      }
})
  }
 

    //end
  
    
  

//Guest Flow

  if(userInput == 'Guest' || userInput == 'Guest'){ 
    requestify.post(sendmessageurl,
      { 
        "recipient":{
        "id":senderID
      },
        "message":{
        "text":"Please enter your OTP"
      }
    }).then(function(success){
      console.log('successful template');
    }).catch(function(error){
      console.log('error', error);  
    });
  } 

//     if(userInput.includes('Eve')){
//     console.log('user OTP is:', userInput)
//     db.collection('Events').where('eventOTP', '==', userInput).get().then(function(result){
//       if(result.empty){
//         console.log('no event')
//   }else{
//     result.forEach(function(relt){
//       var eventType = relt.data().eventType
//       console.log('ur event is:', eventType)
//       if (eventType == 'Wedding'){
//         var bride = relt.data().eventDetails.bride
//         var groom = relt.data().eventDetails.groom
//         var date = relt.data().eventDetails.date
      
//       requestify.post(sendmessageurl,
//       { 
//         "recipient":{
//         "id":senderID
//       },
//         "message":{
//         "text":`Your event is wedding of ${bride} and ${groom} on ${date}.How do you come to the Wedding? Car or Motorbike? `,
        
//         "quick_replies":[
//         {
//           "content_type":"text",
//           "title":"Car",
//           "payload":"car "+relt.data().eventId
//         },
//         {
//           "content_type":"text",
//           "title":"Motorbike",
//           "payload":"motorbike "+relt.data().eventId
//         }
//         ]
//       }
//     }).then(function(success){
//       console.log('successful template');
//     }).catch(function(error){
//       console.log('error', error);  
//     });

//       }
//       if(eventType == 'Party'){
//         var type = relt.data().eventDetails.partyType
//         var guest = relt.data().eventDetails.partyGuests
//         var date = relt.data().eventDetails.date
      
//       requestify.post(sendmessageurl,
//       { 
//         "recipient":{
//         "id":senderID
//       },
//         "message":{
//         "text":`Your event is ${type} party for ${guest} on ${date}.How do you come to the Party? Car or Motorbike?`,

//         "quick_replies":[
//         {
//           "content_type":"text",
//           "title":"Car",
//           "payload":"car "+relt.data().eventId
//         },
//         {
//           "content_type":"text",
//           "title":"Motorbike",
//           "payload":"motorbike "+relt.data().eventId
//         }
//         ]

//       }
//     }).then(function(success){
//       console.log('successful template');
//     }).catch(function(error){
//       console.log('error', error);  
//     });
//       }
//       if(eventType == 'Seminar'){
//         var name = relt.data().eventDetails.seminarName
//         var guest = relt.data().eventDetails.guests
//         var date = relt.data().eventDetails.date
      
//       requestify.post(sendmessageurl,
//       { 
//         "recipient":{
//         "id":senderID
//       },
//         "message":{
//         "text":`Your speaker is ${name} and total guest will be ${guest} on ${date}.How do you come to the Seminar? Car or Motorbike?`,
        
//         "quick_replies":[
//         {
//           "content_type":"text",
//           "title":"Car",
//           "payload":"car "+relt.data().eventId
//         },
//         {
//           "content_type":"text",
//           "title":"Motorbike",
//           "payload":"motorbike "+relt.data().eventId
//         }
//         ]
//       }
//     }).then(function(success){
//       console.log('successful template');
//     }).catch(function(error){
//       console.log('error', error);  
//     });
//       }
//     })
//   }
// })
//   }

  if (userInput == "Motorbike"){
  var payload = webhook_event.message.quick_reply.payload.split(' ')
  var eventId = payload[1]
  db.collection('Guest').doc(`${eventId}`).collection('guestList').doc(`${senderID}`).set({
    guestId: senderID,
    guestVehicle: 'Motorbike'
  }).then(success => {console.log('db success');
    requestify.post(sendmessageurl,
              { 
                "recipient":{
                "id":senderID
                },
              "message":{
                "attachment":{
                  "type":"template",
                    "payload": {
                    "template_type":"button",
                    "text":"Do you want to buy Gifts from our service",
                    "buttons":[{
                      "type":"postback",
                      "title":"Buy",
                      "payload":"Buy"
                    },{
                      "type":"postback",
                      "title":"Skip",
                      "payload":"Skip"
                    }]
                  }
                }
              }
            })
            })
}


if (userInput == "Car"){
  var payload = webhook_event.message.quick_reply.payload.split(' ')
  var eventId = payload[1]
  db.collection('Guest').doc(`${eventId}`).collection('guestList').doc(`${senderID}`).set({
    guestId: senderID,
    guestVehicle: 'Car'
  }).then(success => {
    console.log('db success');
          requestify.post(sendmessageurl,
              { 
                "recipient":{
                "id":senderID
                },
              "message":{
                "attachment":{
                  "type":"template",
                    "payload": {
                    "template_type":"button",
                    "text":"Do you want to buy Gifts from our service",
                    "buttons":[{
                      "type":"postback",
                      "title":"Buy",
                      "payload":"Buy"
                    },{
                      "type":"postback",
                      "title":"Skip",
                      "payload":"Skip"
                    }]
                  }
                }
              }
            })
})
}



//Host Flow

  if(userInput == 'Host' || userInput == 'Host'){ 
    requestify.post(sendmessageurl,
      { 
        "recipient":{
        "id":senderID
        },
      "message":{
        "attachment":{
          "type":"template",
            "payload": {
            "template_type":"button",
            "text":"Do you wish to Create event?",
            "buttons":[{
              "type":"postback",
              "title":"Create",
              "payload":"createEvent"
            }]
          }
        }
      }
    }).then(function(success){
      console.log('successful template');
    }).catch(function(error){
      console.log('error', error);  
    });
  }


// create event

  if(userInput == 'createEvent'){
requestify.post(sendmessageurl,
      { 
        "recipient":{
        "id":senderID
        },
      "message":{
        "attachment":{
          "type":"template",
            "payload": {
  "template_type":"generic",
  "elements":[{
            "title":"Wedding",
            "image_url":"https://images5.alphacoders.com/616/616431.jpg",
            "subtitle":"Wedding",
            "buttons":[{
                "type": "web_url",
                "url": `https://hall-rental.herokuapp.com/weddingReg/${senderID}`,
                "title":"Create",
                "webview_height_ratio":"tall"
              }              
            ]      
          },{
            "title":"Party",
            "image_url":"https://images2.alphacoders.com/787/787147.jpg",
            "subtitle":"Party",
            "buttons":[{
                "type": "web_url",
                "url": `https://hall-rental.herokuapp.com/partyReg/${senderID}`,
                "title":"Create",
                "webview_height_ratio":"tall"
              }              
            ]      
          },{
            "title":"Seminar",
            "image_url":"https://images7.alphacoders.com/697/697523.jpg",
            "subtitle":"Seminar",
            "buttons":[{
                "type": "web_url",
                "url": `https://hall-rental.herokuapp.com/seminarReg/${senderID}`,
                "title":"Create",
                "webview_height_ratio":"tall"
              }              
            ]      
          }
          ]
        }
      }
    }
  })}

if (userInput == 'Buy'){
  requestify.post(sendmessageurl,
      { 
        "recipient":{
        "id":senderID
        },
      "message":{
        "attachment":{
          "type":"template",
            "payload": {
  "template_type":"generic",
  "elements":[{
            "title":"item1",
            "image_url":"https://images4.alphacoders.com/260/260758.jpg",
            "subtitle":"price 10000 MMK",
            "buttons":[{
                "type": "postback",
                "title":"Buy",
                "payload":"item1"
              }                    
            ]      
          },{
            "title":"item2",
            "image_url":"https://images5.alphacoders.com/773/773612.jpg",
            "subtitle":"price 15000 MMK",
            "buttons":[{
                "type": "postback",
                "title":"Buy",
                "payload":"item2"
              }                     
            ]      
          },{
            "title":"item3",
            "image_url":"https://images7.alphacoders.com/779/779169.jpg",
            "subtitle":"price 10000 MMK",
            "buttons":[{
                "type": "postback",
                "title":"Buy",
                "payload":"item3"
                
              }                    
            ]      
          },{
            "title":"You can leave if you don't like it!!!",
            "subtitle":"Cick Cancel button",
            "buttons":[{
                "type": "postback",
                "title":"CANCEL",
                "payload":"Skip"
                
              }                    
            ]      
          }
          ]
        }
      }
    }
  })
}
  

if (userInput == 'item1'){
  let bbb = db.collection('Guest').doc(` Evepty548113161632`).collection('guestList').doc(`${senderID}`);

    const data = {gift:userInput};
      bbb.set(data, {merge:true}).then(resp=>{
    console.log('document ID:' , resp.id)

  })  
}

if (userInput == 'item2'){
  let bbb = db.collection('Guest').doc(`Evepty548113161632`).collection('guestList').doc(`${senderID}`);
  const data = {gift:userInput};
  bbb.set(data, {merge:true}).then(resp=>{
    console.log('document ID:' , resp.id)

  })  
}

if (userInput == 'item3'){
  let bbb = db.collection('Guest').doc(`Evepty548113161632`).collection('guestList').doc(`${senderID}`);
  const data = {gift:userInput};
    bbb.set(data, {merge:true}).then(resp=>{
    console.log('document ID:' , resp.id)

  })  
}
         
  
            
if (userInput == 'Skip'){
  requestify.post(sendmessageurl,
      { 
        "recipient":{
        "id":senderID
        },
         
          "message":{
          "text":"Looking forward from the celebration event! "
  }

      
    
  })
}


  });

    // Returns a '200 OK' response to all requests
   // res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    console.log("it is not page")
  }

});

