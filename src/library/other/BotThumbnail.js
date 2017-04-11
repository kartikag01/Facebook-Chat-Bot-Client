import React from "react";

export default  class BotThumbnail extends React.Component {

    render() {
        let {botThumbnailImageUrl} =  this.props;
        return (
            <img class="botThumbnailImage" src={botThumbnailImageUrl}/>
        );
    }
}
