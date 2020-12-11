import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOff = this.toggleOff.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
    this.state = { isToggleOn: true };
  }

  toggleOff() {
    this.setState({ isToggleOn: false });
  }

  toggleOn() {
    this.setState({ isToggleOn: true });
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    if (isToggleOn) {
      return (
        <div className="outer-container">
          <div className="container container-on" onClick={this.toggleOff}>
            <div className=" circle circle-on" ></div>
          </div>
          ON
        </div>
      );
    } else {
      return (
        <div className="outer-container">
          <div className="container" onClick={this.toggleOn}>
            <div className="circle"></div>
          </div>
        OFF
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
