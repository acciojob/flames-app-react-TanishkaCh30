import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesApp from "./Flames";

class App extends Component {
    render() {

        return(
            <div id="main">
               <FlamesApp></FlamesApp>
            </div>
        )
    }
}


export default App;
