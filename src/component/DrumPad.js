import React from "react";
import "../style/drumpad.scss";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <audio id={this.props.keyTrigger} src={this.props.url} />
        <span translate="no">{this.props.keyTrigger}</span>
      </div>
    );
  }
}
export default DrumPad;
