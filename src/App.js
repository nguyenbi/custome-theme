import React, { Component } from "react";
import './App.css';
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import FontSizeSetting from "./components/FontSizeSetting";
import Result from "./components/Result";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-50">
          <div className="row">
            <ColorPicker />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <FontSizeSetting />
              <Reset />
            </div>
            <Result />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
