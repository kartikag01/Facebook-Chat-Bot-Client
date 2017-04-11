import React from "react";
import Image from "./attachment-type/Image";
import Video from "./attachment-type/Video";
import Audio from "./attachment-type/Audio";
import File from "./attachment-type/File";
import Template from "./attachment-type/Template";


const ATTACHMENT_TYPES = require("../../const/variable").CONSTANTS.MESSAGE.ATTACHMENT_TYPES;

export default  class Attachment extends React.Component {

    render() {
        let {attachment}                     =  this.props;
        let {type : attachmentType, payload} = attachment;

        switch (attachmentType) {
            case ATTACHMENT_TYPES.AUDIO :
                return <Audio payload={payload}/>;
            case ATTACHMENT_TYPES.VIDEO:
                return <Video payload={payload}/>;
            case ATTACHMENT_TYPES.IMAGE :
                return <Image payload={payload}/>;
            case ATTACHMENT_TYPES.FILE :
                return <File payload={payload}/>;
            case ATTACHMENT_TYPES.TEMPLATE :
                return <Template payload={payload}/>;
        }
        return (
            <div className="bot-message-text error">MESSAGE IS NOT SUPPORTED ON CLIENT</div>
        );
    }
}
