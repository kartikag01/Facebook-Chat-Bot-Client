import React from "react";

export default  class BotThumbnail extends React.Component {

    render() {
        let {botThumbnailImageUrl} =  this.props;
        return (
            <img className="botThumbnailImage" style={{padding: 6}}
                 src="https://bot-framework.azureedge.net/bot-icons-v1/bot-framework-default-7.png"/>
        );
    }
}
