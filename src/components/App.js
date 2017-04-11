import React, {Component} from "react";
import TextField from "material-ui/TextField";
import Send from "material-ui/svg-icons/content/send";
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
                        "text": "Hello, Dexterous!"
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
                <Row>
                    <Col xs={6}>
                        <TextField
                            multiLine
                            rows={5}
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
                    </Col>
                    <Col xs={6}>
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
        );
    }
}

export default App;
