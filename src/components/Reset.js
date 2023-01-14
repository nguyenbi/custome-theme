import React, { Component } from "react";
class Reset extends Component {
    // constructor(props){
    //     super(props);
    //     this.resetSetting = this.resetSetting.bind(this)
    // }
    resetSetting =() => {
        this.props.onSettingDefault();
       // alert("aaaa");
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.resetSetting}> Reset</button>
        );
    }
}

export default Reset;
