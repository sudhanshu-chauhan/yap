import React, { Component } from "react";
import AppTopBar from "./components/AppTopBar";
import "./App.css";

class App extends Component{
    render(){
        return (
            <div className="App">
                <AppTopBar/>
            </div>
        );
    }
}

export default App;