import React from "react";
import "./AppTopBar.css";

class AppTopBar extends React.Component {
    render() {
        return (
            <div className="app-top-bar">
                <input className="top-bar-input" placeholder="New Task..." type="text"></input>
            </div>
        );
    }
}

export default AppTopBar;