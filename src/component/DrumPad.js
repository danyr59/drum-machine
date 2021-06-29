import React from "react";
import "../style/drumpad.scss";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: "grey",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };
    this.handlerKeyPress = this.handlerKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  activatePad() {
    if (this.props.power) {
      if (this.state.padStyle.backgroundColor === "orange") {
        this.setState({
          padStyle: inactiveStyle,
        });
      } else {
        this.setState({
          padStyle: activeStyle,
        });
      }
    } else if (this.state.padStyle.marginTop === 13) {
      this.setState({
        padStyle: inactiveStyle,
      });
    } else {
      this.setState({
        padStyle: {
          height: 77,
          marginTop: 13,
          backgroundColor: "grey",
          boxShadow: "0 3px grey",
        },
      });
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    // console.log(sound);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => {
      this.activatePad();
    }, 100);
    this.props.updateDisplay(this.props.id.replace(/-/g, " "));
  }
  handlerKeyPress(event) {
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handlerKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlerKeyPress);
  }
  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.playSound}
        style={this.state.padStyle}
      >
        <audio id={this.props.keyTrigger} src={this.props.url} />
        <span translate="no">{this.props.keyTrigger}</span>
      </div>
    );
  }
}
export default DrumPad;
