import React, { Component } from "react";
class FontSizeSetting extends Component {
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: 15px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success">Increase</button>
                    <button type="button" className="btn btn-primary">Decrease</button>
                </div>
            </div>
        );
    }
}
export default FontSizeSetting;
