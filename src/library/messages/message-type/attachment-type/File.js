import React from "react";

export default  class File extends React.Component {


  render() {
    let { payload } =  this.props;
    return (
      <div className="bot-message-text">
        <div class="download-icon"></div>
        <a href={payload.url} target="_blank">{getFilename(payload.url)}</a>
      </div>
    );
  }
}

let getFilename = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

