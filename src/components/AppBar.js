

import React, { Component } from 'react'
import './AppBar.css';

const { BrowserWindow } = window.require('electron').remote;


export class AppBar extends Component {

    closeWindow = () => {
        var electronWindow = BrowserWindow.getFocusedWindow();
        electronWindow.close();
    }

    render() {
        return (
            <div className="app-bar">
                <div className="title">hush</div>
                <button className="close-button" onClick={this.closeWindow}>X</button>
            </div>
        )
    }
}

export default AppBar
