
import React from "react";
var Linkifier = require('./../../other/Linkifier');
var Emotify = require('./../../other/Emotify');

var linkifier = Object.create(Linkifier);
var emotify = Object.create(Emotify);


export default  class PlainText extends React.Component {


  formatBody = (text) => {
    if (text === '' || typeof text === 'undefined') {
      return '';
    }

    let textArray = [text];
    textArray = linkifier.parse(textArray);
    textArray = emotify.parse(textArray);

    return textArray;
  };

  render() {
    let { messageText, className } =  this.props;
    if (messageText && messageText.length > 0)
      return (
        <div className={className}>{this.formatBody(messageText)}</div>
      );
    else
      return null;
  }
}
