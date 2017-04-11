import React from "react";
import {connect} from "react-redux";

@connect(store => {
  return {
    showSendingAction:store.Messages.showSendingAction
  }
})
export default  class SendingAction extends React.Component {

  render() {
    let { showSendingAction } = this.props;
    if (showSendingAction)
      return (
        <img src="http://cdn.osxdaily.com/wp-content/uploads/2013/12/imessage-sending-animated-gif.gif"/>
      );
    else
      return null;
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    let objDiv = document.getElementById("mainChat");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

}
