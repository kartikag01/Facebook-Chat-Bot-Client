import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";
import "./index.css";

/*
 Needed for onTouchTap
 Can go away when react 1.0 release
 Check this repo:
 https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
