import React from "react";
import PlainText from "./message-type/PlainText";
import Attachment from "./message-type/Attachment";
import QuickReply from "./message-type/QuickReply";
import BotThumbnail from "../other/BotThumbnail";
import {CONSTANTS} from "../const/variable";

export default  class BotMessage extends React.Component {

    render() {
        let {messageInfo, isLast} =  this.props;
        if (messageInfo.body.type == CONSTANTS.MESSAGE_GENERATOR.BOT) {

            let message   = messageInfo.body && messageInfo.body.bot ?
                messageInfo.body.bot.message : {};
            let timestamp = messageInfo.timestamp;

            if (message) {
                let {text, attachment, quick_replies} = message;

                if (text) {
                    return (
                        <div className="bot-message width100 inlineFlex">
                            <div className="width7">
                                <BotThumbnail />
                            </div>
                            <div className="width80">
                                <PlainText className="bot-message-text" messageText={text}/>
                                <div className="bot-message-time">{timestamp}</div>
                                <QuickReply quickReplies={quick_replies} isLast={isLast}/>
                            </div>
                        </div>
                    );
                } else if (attachment) {
                    return (
                        <div className="bot-message width100 inlineFlex">
                            <div className="width7">
                                <BotThumbnail />
                            </div>
                            <div className="width80">
                                <Attachment attachment={attachment}/>
                                <div className="bot-message-time">{timestamp}</div>
                                <QuickReply quickReplies={quick_replies} isLast={isLast}/>
                            </div>
                        </div>
                    );
                }
            }
        }
    }
}
