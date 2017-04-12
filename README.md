
## About
This is a UI Library for Facebook Bot.
Test your sample json and check its view without setting Webhook

## Supported Send API Reference

## Content Types

### TEXT
```
{
  "message": {
    "text": "hello, Developer!"
  }
}
```

### File
```
{
  "message": {
    "attachment": {
      "type": "file",
      "payload": {
        "url": "https://petersapparel.com/bin/receipt.pdf"
      }
    }
  }
}
```

### Image
```
{
  "message": {
    "attachment": {
      "type": "image",
      "payload": {
        "url": "http://thiovan.com/wp-content/uploads/2017/01/javascript_banner-660x330.jpg"
      }
    }
  }
}
```



## Templates


###  Button 
```
{
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
}
```


### Generic
```
{
  "message": {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": "Welcome to Peters Hats",
            "image_url": "http://www.wpwatercooler.com/wp-content/uploads/2013/08/cowboy-coder.png",
            "subtitle": "We ve got the right hat for everyone.",
            "default_action": {
              "type": "web_url",
              "url": "https://peterssendreceiveapp.ngrok.io/view?item=103",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://petersfancybrownhats.com",
                "title": "View Website"
              },
              {
                "type": "postback",
                "title": "Start Chatting",
                "payload": "DEVELOPER_DEFINED_PAYLOAD"
              }
            ]
          }
        ]
      }
    }
  }
}
```

### Quick Reply


```
"message":{
    "text":"Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Red",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
      },
      {
        "content_type":"text",
        "title":"Green",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
      }
    ]
  }
```


