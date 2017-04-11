import React from "react";

export default  class Audio extends React.Component {

  render() {
    let { payload } =  this.props;
    return (
      <div className="bot-message-text error">AUDIO MESSAGE IS NOT SUPPORTED ON CLIENT</div>
    );
  }
}
