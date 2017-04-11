

# Supported Send API Reference

## Content Types

### TEXT
```
{
  "message": {
    "text": "hello, world!"
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
        "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjsfEqNeaDzVutKlcInnUApAmWETbFskvHrPR1W_ssUlaHk-nRdQ"
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
            "image_url": "https://petersfancybrownhats.com/company_image.png",
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

