import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return <button onClick={this.handleClick}>Click mee!</button>;
    } else {
      return <button>Thanksss</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
