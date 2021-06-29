import React, { Component } from "react";
import "../style/padbank.scss";
import DrumPad from "./DrumPad.js";
class PadBank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let PadBank = this.props.currentPadBank.map((current, i) => {
      return (
        <DrumPad
          keyCode={current.keyCode}
          keyTrigger={current.keyTrigger}
          id={current.id}
          url={this.props.power ? current.url : ""}
          updateDisplay={this.props.updateDisplay}
          power={this.props.power}
        />
      );
    });
    return <div className="cont-keys">{PadBank}</div>;
  }
}
export default PadBank;
