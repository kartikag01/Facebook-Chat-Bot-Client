import React from "react";
import muiThemeable from "material-ui/styles/muiThemeable";

@muiThemeable()
export default  class MaterialSpan extends React.Component {
  render() {
    let style = this.props.style;
    return (
      <span
        style={{color: this.props.muiTheme.palette.textColor, fontFamily: this.props.muiTheme.fontFamily, ...style}}>
        {this.props.text}
        </span>
    );
  }
}
