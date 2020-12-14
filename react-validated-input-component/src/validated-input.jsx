import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      validated: false,
      error: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

    if (event.target.value.length === 0) {
      this.setState({ validated: false });
      this.setState({ error: 'A password is required.' });
    }
    if (event.target.value.length > 0) {
      this.setState({ validated: false });
      this.setState({ error: 'Your password is too short.' });
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

  getIconClass() {
    const validated = this.state.validated;
    if (validated) {
      return 'fas fa-check check';
    }
    return 'fas fa-times red-x';
  }

  render() {
    const iconClass = this.getIconClass();
    const message = this.state.error;
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

const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})');

export default PasswordForm;
