import React from "react";
// import {connect} from "react-redux";
import MainChat from "./MainChat";
import EnterMessage from "./EnterMessage";

export default class Index extends React.Component {

    render() {
        return (
            <div className="container">
                {this.getChatView()}
            </div>
        );
    }

    getChatView = () => {
        const {messages , userMessageEntered} = this.props;
        return (
            <div>
                <MainChat messages={messages} className="main-chat"/>
                <EnterMessage userMessageEntered={userMessageEntered} className="message-bar center55"/>
            </div>
        )
    };
}
