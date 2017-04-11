import React from "react";
import map from "lodash/map";
const QUICK_REPLY_CONTENT_TYPES = require("../../const/variable").CONSTANTS.MESSAGE.QUICK_REPLY_CONTENT_TYPES;

export default  class QuickReply extends React.Component {

    render() {
        let {quickReplies, isLast} =  this.props;
        if (isLast)
            return (
                <div className="quickReplies">
                    {
                        map(quickReplies, (quickReply, index) => {
                            return this.getQuickReply(quickReply, index);
                        })
                    }
                </div>
            );
        else
            return null;
    }

    getQuickReply = (quickReply, index) => {
        let {content_type, title, payload, image_url} =  quickReply;

        if (content_type == QUICK_REPLY_CONTENT_TYPES.TEXT) {
            return <div key={index}
                        className="quickReply hand">{title}</div>
        } else {
            return <div key={index}
                        className="quickReply hand">Send Location</div>
        }
    }
}
