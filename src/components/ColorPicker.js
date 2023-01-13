import React, { Component } from "react";
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'yellow', 'blue']
        }
    }
    showColor(item) {

        return item === "yellow" ? {
            backgroundColor: item,
            color: "#000"
        } :
            {
                backgroundColor: item,
                color: "#fff"
            }
    }

    setActiveColor(param) {
        this.props.onReceiveColor(param)
    }
    render() {
        var elementColors = this.state.colors.map((item, index) => {
            return (
                <span
                    key={index}
                    style={this.showColor(item)}
                    className={this.props.color === item ? "active" : ""}
                    onClick={() => this.setActiveColor(item)}
                >{item}</span>
            )
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elementColors}
                        <hr />
                    </div>
                </div>

            </div >
        );
    }
}

export default ColorPicker;
