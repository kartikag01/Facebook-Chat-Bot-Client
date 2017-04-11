import React from "react";
import {DEFAULT_BUTTON_URL} from "../../../../../const/variable";
const BUTTON_TYPES = require("../../../../../const/variable").CONSTANTS.MESSAGE.BUTTON_TYPES;


export default  class Buttons extends React.Component {

    render() {
        let {button} =  this.props;
        // console.log("buttons() : ", button);

        let {title, type, payload, url}  =  button;
        if (type == BUTTON_TYPES.POSTBACK) {
            return (
                <div className="button">
                    <a >{title}</a>
                </div>
            );
        } else {
            return (
                <div className="button">
                    <a target="_blank" className="text-decoration-none"
                       href={button.url || DEFAULT_BUTTON_URL}>{title}</a>
                </div>
            );
        }

    }

}
