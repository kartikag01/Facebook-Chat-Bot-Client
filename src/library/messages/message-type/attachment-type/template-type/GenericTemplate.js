import React from "react";
import map from "lodash/map";
import Buttons from "./utils/Buttons";

export default  class GenericTemplate extends React.Component {

  render() {
    let { elements } =  this.props;

    return (
      <div className="genericTemplateWrapper">
        { this.getElements(elements)}
      </div>
    );
  }

  getElements = (elements) => {
    return map(elements, (element, index) => {
      let { buttons, image_url, subtitle, title, default_action } = element;
      return (
        <div className="genericTemplate" key={index}>
          <img className="card-image-url" src={image_url}/>
          <div>
            <div className="spanWrapper">
              <span className="card-tittle">{title}</span>
              <span className="card-subtitle">{subtitle}</span>
              <span className="card-redirect-url"></span>
            </div>
            <div className="buttonWrapper">
              {this.getButtons(buttons)}
            </div>
          </div>
        </div>
      );
    })
  };

  getButtons = (buttons) => {
    return map(buttons, (button, index) => {
      return <Buttons button={button} key={index}/>;
    })
  }


}
