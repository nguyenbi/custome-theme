import React, { Component } from "react";
class FontSizeSetting extends Component {
    ChangeSize(value){
        this.props.onChangeFontSize(value)
    }
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>this.ChangeSize(+2)}>Increase</button>
                    <button type="button" className="btn btn-primary" onClick={()=>this.ChangeSize(-2)}>Decrease</button>
                </div>
            </div>
        );
    }
}
export default FontSizeSetting;
