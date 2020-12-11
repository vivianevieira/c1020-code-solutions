import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }

  render() {
    const count = this.state.count;
    if (count < 3) {
      return <button className="btn white-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count >= 3 && count < 6) {
      return <button className="btn blue-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count >= 6 && count < 9) {
      return <button className="btn purple-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count >= 9 && count < 12) {
      return <button className="btn red-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count >= 12 && count < 15) {
      return <button className="btn orange-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count >= 15 && count < 18) {
      return <button className="btn yellow-btn" onClick={this.handleClick}>Hot Button</button>;
    }
    if (count === 18) {
      return <button className="btn white-btn">Hot Button</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
