import React, {Component} from "react";
import TextField from "material-ui/TextField";
import Send from "material-ui/svg-icons/content/send";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import {Row, Col} from "../wx-grid-system";
import Snackbar from "material-ui/Snackbar";
import update from "immutability-helper";
import Library from "../library";
import "../App.css";

class App extends Component {

    state = {
        openSnackBar   : false,
        snackBarMessage: "",
        messages       : [{
            body: {
                type: "bot",
                bot : {
                    message: {
                        "text": "Hello, Developer!"
                    }
                }
            },
        }]
    };

    addBotMessage = () => {
        let {messages, newMessage} = this.state;
        try {
            let messageWithWrapper = {
                body: {
                    type: "bot",
                    bot : JSON.parse(newMessage)
                },
            };
            this.setState({messages: update(messages, {$push: [messageWithWrapper]})})
        } catch (err) {
            this.setState({openSnackBar: true, snackBarMessage: 'Please Enter Valid JSON'});
            setTimeout(() => {
                this.setState({openSnackBar: false});
            }, 4000);
        }
    };

    userMessageEntered = (text) => {
        let {messages}         = this.state;
        let messageWithWrapper = {
            body: {
                type: "user",
                user: {
                    message: {
                        text: text
                    }
                }
            },
        };
        this.setState({messages: update(messages, {$push: [messageWithWrapper]})})
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Facebook Bot Messenger Test Client"
                    iconElementRight={
                        <a href="https://github.com/KARTIK01/Facebook-Chat-Bot-Client" target="_blank">
                            <img style={{
                                width : 55,
                                height: 55,
                                cursor: 'pointer'
                            }} src="https://storage.googleapis.com/images-dexterous/fb-chat-bot-ui/github_logo.png"/>
                        </a>
                    }
                />
                < div style={{padding: 20}}>
                    <Row>
                        <Col xs={8}>
                            Enter Message From Bot
                            <TextField
                                multiLine
                                rows={5}
                                rowsMax={9}
                                fullWidth
                                onChange={(event, newMessage) => this.setState({newMessage})}
                                name="json-message"
                            />
                            <RaisedButton
                                primary
                                icon={<Send />}
                                label="Send Message"
                                onTouchTap={() => this.addBotMessage()}
                            />
                            <div style={{paddingTop: 30}}>
                                React Docs on github for sample json of messages
                            </div>
                        </Col>
                        <Col xs={4}>
                            <Library userMessageEntered={this.userMessageEntered} messages={this.state.messages}/>
                        </Col>
                    </Row>
                    <Snackbar
                        open={this.state.openSnackBar}
                        message={this.state.snackBarMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
            </div>
        );
    }
}

export default App;
