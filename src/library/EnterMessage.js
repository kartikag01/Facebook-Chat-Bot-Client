import React from "react";
// import {connect} from "react-redux";
// import {plainTextEntered} from "../actions/index";
import PersistentMenus from "./other/PersistentMenus";
// import {HIDE_P_MENU} from "../actions/constants/const";

// @connect(store => {
//   return {}
// })
export default  class EnterMessage extends React.Component {

    onSubmitMessage = () => {
        let {dispatch} = this.props;
        let text       = this.refs.message.value;
        // if (text && text.length > 0) {
        //   dispatch(plainTextEntered({ text }));
        //   this.refs.message.value = "";
        // }
    };

    render() {
        let {dispatch} = this.props;
        return (
            <div className={this.props.className + " inlineFlex"}>
                <PersistentMenus />
                <input type="text" className="input-text" ref="message"
                       onKeyDown={ (event) => {
                           if (event.keyCode == 13) {
                               this.onSubmitMessage()
                           }
                       }}/>
                <img src="http://i65.tinypic.com/107oxf5_th.png" className="send-btn hand"
                     onClick={this.onSubmitMessage}/>
            </div>
        );
    }
}


// {/*onFocus={() => dispatch({ type:HIDE_P_MENU })}*/}
