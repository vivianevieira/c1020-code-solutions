import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      running: false,
      runningTimeSec: 0
    };
  }

  handleClick() {
    const running = this.state.running;
    if (!running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.tick(), 1000);
    } else {
      this.setState({ running: false });
      clearInterval(this.watch);
    }
  }

  tick() {
    this.setState({ runningTimeSec: this.state.runningTimeSec + 1 });
    if (this.state.runningTimeSec >= 60) {
      this.setState({ runningTimeSec: 0 });
    }
  }

  reset() {
    const running = this.state.running;
    if (!running) {
      this.setState({ runningTimeSec: 0 });
    }
  }

  getIconClass() {
    const running = this.state.running;
    if (!running) {
      return 'fas fa-play';
    }
    return 'fas fa-pause';
  }

  render() {
    const iconClass = this.getIconClass();
    return (
      <div>
        <div className="circle" onClick={this.reset}>
          {this.state.runningTimeSec}
        </div>
        <div onClick={this.handleClick}>
          <i className={`icon ${iconClass}`}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
