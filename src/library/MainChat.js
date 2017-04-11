import React from "react";
import map from "lodash/map";
import UserMessage from "./messages/UserMessage";
import BotMessage from "./messages/BotMessage";
import {CONSTANTS} from "./const/variable";

export default  class MainChat extends React.Component {

    render() {
        const {messages} = this.props;
        return (
            <div className={this.props.className} id="mainChat">
                {this.getMessagesView(messages)}
            </div>
        );
    }

    getMessagesView = (messages) => {
        if (messages && messages.length >= 0) {
            return map(messages, (message, index) => {
                let isLast = index == messages.length - 1;
                return this.getMessageView(message, index, isLast);
            })
        } else {
            return <div>Loading...</div>
        }
    };

    getMessageView = (message, index, isLast) => {
        if (message.body && message.body.type == CONSTANTS.MESSAGE_GENERATOR.USER)
            return <UserMessage key={index} messageInfo={message}/>;
        else if (message.body && message.body.type == CONSTANTS.MESSAGE_GENERATOR.BOT) {
            return <BotMessage key={index} messageInfo={ message } isLast={isLast}/>;
        }
    };
}
