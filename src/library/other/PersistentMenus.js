import React from "react";
import map from "lodash/map";
const PERSISTENT_MENUS = require("../const/variable").CONSTANTS.PERSISTENT_MENUS;

// @connect(store => {
//     return {
//         persistentMenus    : store.Messages.persistentMenus,
//         showPersistentMenus: store.Messages.showPersistentMenus
//     }
// })
export default  class PersistentMenus extends React.Component {

    togglePersistenceMenu = () => {
        let {showPersistentMenus, dispatch} = this.props;
        // if (showPersistentMenus) {
        //     dispatch({type: HIDE_P_MENU})
        // } else {
        //     dispatch({type: SHOW_P_MENU})
        // }
    };

    render() {
        return (
            <div className="persistenceMenuIconDiv">
                {this.getMenu()}
                <div className={this.props.className + " persistenceMenuIcon hand"}
                     onClick={() => this.togglePersistenceMenu()}>
                    ☰
                </div>
            </div>
        );
    }

    getMenu = () => {
        let {persistentMenus, showPersistentMenus} = this.props;

        if (showPersistentMenus)
            return (
                <div className="persistence-menus">
                    {this.getPersistentMenus(persistentMenus)}
                </div>
            );
        else return null;
    };

    getPersistentMenus = (persistentMenus) => {
        return map(persistentMenus, (persistentMenu, index) => {
            let {type, payload, title, url} = persistentMenu;
            if (type == PERSISTENT_MENUS.POSTBACK) {
                return (
                    <div key={index} className="persistence-menu-item hand"
                         onClick={() => {
                             this.togglePersistenceMenu();
                         }}>
                        {title}
                    </div>
                )
            } else {
                return (
                    <div key={index} className="persistence-menu-item hand">
                        <a href={url} className="text-decoration-none" target="_blank"> {title}</a>
                    </div>
                )
            }
        });
    }
}
