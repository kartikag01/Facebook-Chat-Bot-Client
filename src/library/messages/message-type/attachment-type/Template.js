import React from "react";
import ButtonTemplate from "./template-type/ButtonTemplate";
import GenericTemplate from "./template-type/GenericTemplate";

import PlainText from "../PlainText";


const TEMPLATE_TYPES = require("../../../const/variable").CONSTANTS.MESSAGE.TEMPLATE_TYPES;

export default class Template extends React.Component {

  render() {
    let { payload } =  this.props;
    let { text } = payload;

    return (
      <div>
        {this.getPlainText(text)}
        {this.getTemplate()}
      </div>
    );
  }

  getPlainText = (text) => {
    return <PlainText messageText={text}/>
  };

  getTemplate = () => {
    let { payload } =  this.props;
    let { template_type, buttons, elements } = payload;
    switch (template_type) {
      case TEMPLATE_TYPES.BUTTON :
        return <ButtonTemplate buttons={buttons}/>;
      case TEMPLATE_TYPES.GENERIC :
        return <GenericTemplate elements={elements}/>;
    }
  }
}
