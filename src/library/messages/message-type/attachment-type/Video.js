import React from "react";

export default  class Video extends React.Component {

  render() {
    let { payload } =  this.props;
    return (
      <div className="bot-message-text error">video MESSAGE IS NOT SUPPORTED ON CLIENT</div>
    );
  }
}
