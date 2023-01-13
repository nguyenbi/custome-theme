import React, { Component } from "react";
import './App.css';
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import FontSizeSetting from "./components/FontSizeSetting";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      fontSize: 15
    }
    // this.onSetColor = this.onSetColor.bind(this);
  }

  // onSetColor(param) {
  //   this.setState({
  //     color: param
  //   });
  // }

  onSetColor = (param) => {
    this.setState(
      {
        color: param
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-50">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <FontSizeSetting />
              <Reset />
            </div>
            <Result color={this.state.color} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
