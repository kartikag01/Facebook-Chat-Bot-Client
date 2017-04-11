import React from "react";

export default  class Image extends React.Component {

  render() {
    let { payload } =  this.props;
    let { url } = payload;
    return (
      <div>
        <img className="imageResponse"
             src={url}/>
      </div>
    );
  }
}
