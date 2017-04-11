import React from "react";
import map from "lodash/map";
import Buttons from "./utils/Buttons";

export default  class ButtonTemplate extends React.Component {

  render() {
    let { buttons } =  this.props;
    return (
      <div className="buttonWrapper">
        { this.getButtons(buttons)}
      </div>
    );
  }

  getButtons = (buttons) => {
    return map(buttons, (button, index) => {
      return <Buttons button={button} key={index}/>;
    })
  }
}
