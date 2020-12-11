import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.changeToggle = this.changeToggle.bind(this);
    this.state = { isToggleOn: true };
  }

  changeToggle() {
    this.setState({ isToggleOn: false });
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    if (isToggleOn) {
      return (
        <div className="outer-container">
          <div className="container container-on" onClick={this.changeToggle}>
            <div className=" circle circle-on" ></div>
          </div>
          ON
        </div>
      );
    } else {
      return (
        <div className="outer-container">
          <div className="container">
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
