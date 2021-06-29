import "./style/App.scss";
import React, { Component } from "react";
import { bankOne, bankTwo } from "./services/Banks.js";
import PadBank from "./component/PadBank.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      sliderVal: 50,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: "Heater Kit",
    };
    this.handlerSelectPower = this.handlerSelectPower.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  selectBank() {
    if (this.state.power) {
      if (this.state.currentPadBankId === "Heater Kit") {
        this.setState({
          currentPadBank: bankTwo,
          display: "Smooth Piano Kit",
          currentPadBankId: "Smooth Piano Kit",
        });
      } else {
        this.setState({
          currentPadBank: bankOne,
          display: "Heater Kit",
          currentPadBankId: "Heater Kit",
        });
      }
    }
  }
  handlerSelectPower() {
    this.setState((state) => ({
      power: !state.power,
      display: String.fromCharCode(160),
    }));
  }
  adjustVolume(e) {
    if (this.state.power) {
      this.setState((state) => ({
        sliderVal: e.target.value,
        display: "Volume" + " " + Math.round(e.target.value),
      }));
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160),
    });
  }
  updateDisplay(textDisplay) {
    if (this.state.power) {
      this.setState({
        display: textDisplay,
      });
    }
  }
  render() {
    console.log(this.state.currentPadBank);
    return (
      <div className="App">
        <div className="App-header">
          <div
            id="drum-machine"
            className="contenedor border border-warning border-5"
          >
            <div className="logo">
              <i className="bi bi-music-note-beamed"></i>
            </div>
            <div className="contenedor2">
              <PadBank
                volume={this.state.sliderVal}
                currentPadBank={this.state.currentPadBank}
                updateDisplay={this.updateDisplay}
                power={this.state.power}
              />
              <div className="controls-container">
                <div className="control">
                  <p>Power</p>
                  <div className="select" onClick={this.handlerSelectPower}>
                    <div
                      className="inner"
                      style={
                        this.state.power
                          ? { float: "right" }
                          : { float: "left" }
                      }
                    ></div>
                  </div>
                </div>
                <p id="display">{this.state.display}</p>
                <div>
                  <input
                    type="range"
                    value={this.state.sliderVal}
                    min="0"
                    max="1 "
                    step="0.01"
                    onChange={this.adjustVolume}
                  />
                </div>
                <div className="control">
                  <p>Bank</p>
                  <div className="select" onClick={this.selectBank}>
                    <div
                      className="inner"
                      style={
                        this.state.currentPadBankId === "Heater Kit"
                          ? { float: "left" }
                          : { float: "right" }
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
/*import logo from "./image/logo.svg";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
