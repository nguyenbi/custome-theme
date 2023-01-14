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
      fontSize: 12
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
  
  changeSize = (value)=>{
    if(this.state.fontSize + value >= 8 &&
       this.state.fontSize + value <= 36){
        this.setState(
          {
            fontSize: this.state.fontSize + value
          }
        )
    }else{
      alert("Fontsize is allow from 8 to 36px");
      return false;
    }
    
  }

  onReset = (value)=>{
    this.setState({
      color: 'red',
      fontSize: 12
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container mt-50">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <FontSizeSetting fontSize={this.state.fontSize} onChangeFontSize={this.changeSize}/>
              <Reset onSettingDefault={this.onReset} />
            </div>
            <Result color={this.state.color}  fontSize={this.state.fontSize}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
