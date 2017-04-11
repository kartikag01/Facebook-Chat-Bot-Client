/* No of nodes in one module*/
export const innerNodes = 8;

// query param const passes in web sdk
export const chatterOn_ClientId = "chatterOn_ClientId";

export const DEFAULT_BUTTON_URL = "https://chatteron.io/";

export const CONSTANTS = {
  MESSAGE_GENERATOR:{
    USER:"user",
    BOT :"bot"
  },

  PERSISTENT_MENUS:{
    WEB_URL :"web_url",
    POSTBACK:"postback"
  },
  /* constants for message */
  MESSAGE         :{

    // types of attachment
    ATTACHMENT_TYPES:{
      AUDIO   :"audio",
      VIDEO   :"video",
      FILE    :"file",
      IMAGE   :"image",
      TEMPLATE:"template"
    },

    // types of templates
    TEMPLATE_TYPES:{
      GENERIC:"generic",
      BUTTON :"button"
    },

    // types of button in any message
    BUTTON_TYPES:{
      WEB_URL :"web_url",
      POSTBACK:"postback"
    },

    // type of content
    "MESSAGE_TYPES":{
      "PLAIN_TEXT":"plainText",
      "ATTACHMENT":"attachment",
      "TEMPLATE"  :"template"
    },


    // types of quick replies
    "QUICK_REPLY_CONTENT_TYPES":{
      "TEXT"    :"text",
      "LOCATION":"location"
    },
  },
};
