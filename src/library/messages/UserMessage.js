import React from "react";
import {CONSTANTS} from "../const/variable";
import PlainText from "./message-type/PlainText";

export default  class UserMessage extends React.Component {

    render() {
        let {messageInfo} =  this.props;
        if (messageInfo.body.type == CONSTANTS.MESSAGE_GENERATOR.USER) {
            let {text}    =  messageInfo.body.user.message;
            let timestamp = messageInfo.timestamp;

            return (
                <div className="user-message width100 inlineFlex">
                    <div className="width20"/>
                    <div className="width80">
                        <PlainText className="user-message-text" messageText={text}/>
                        <div className="user-message-time">{timestamp}</div>
                    </div>
                </div>
            );
        }
    }
}
