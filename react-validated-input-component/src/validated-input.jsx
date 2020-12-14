import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      characters: 0,
      validated: false,
      error: 'req'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ characters: event.target.value.length });

    if (event.target.value.length === 0) {
      this.setState({ validated: false });
      this.setState({ error: 'req' });
    }
    if (event.target.value.length > 0) {
      this.setState({ validated: false });
      this.setState({ error: 'short' });
    }
    if (event.target.value.length >= 8) {
      this.setState({ validated: true });
      this.setState({ error: '' });
    }
  }

  analyzeRegex() {
    const value = this.state.value;
    if (passwordRegex.test(value)) {
      return '';
    } else {
      return 'Your password must contain a digit, a capital letter and a special character.';
    }
  }

  getErrorMsg() {
    const errorMsg = this.state.error;
    if (errorMsg === 'req') {
      return 'A password is required.';
    }
    if (errorMsg === 'short') {
      return 'Your password is too short.';
    }
    if (errorMsg === '') {
      return '';
    }
  }

  getIconClass() {
    const validated = this.state.validated;
    if (validated) {
      return 'fas fa-check check';
    }
    return 'fas fa-times red-x';
  }

  render() {
    const iconClass = this.getIconClass();
    const message = this.getErrorMsg();
    const analyzeRegex = this.analyzeRegex();
    return (
      <form>
        <label htmlFor="pass">
          Password
        </label>
        <input
          type="password"
          id="pass"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <i className={iconClass}></i>
        <div className="error-msg">{message}
          <p>{analyzeRegex}</p>
        </div>
      </form>
    );
  }
}

const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])(?=.{8,})');

export default PasswordForm;
