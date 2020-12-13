import React from 'react';

class ListItem extends React.Component {
  render() {
    const value = this.props.value;
    return (
      <tr>
        <td>{value}</td>
      </tr>
    );
  }
}

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { drawerOn: false };
  }

  handleClick() {
    this.setState(state => ({
      drawerOn: !state.drawerOn
    }));
  }

  render() {
    const drawerOn = this.state.drawerOn;
    const listItems = links.map(link =>
      <ListItem key={link.id} value={link} onClick={this.handleClick} />
    );
    if (drawerOn) {
      return (
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <th>Menu</th>
              </tr>
            </thead>
            <tbody onClick={this.handleClick}>
              {listItems}
            </tbody>
          </table>
          <div className="container" onClick={this.handleClick}></div>
        </div>
      );
    }
    if (!drawerOn) {
      return (
        <div className="button-cont">
          <i className="fas fa-bars" onClick={this.handleClick}></i>
        </div>
      );
    }
  }
}

const links = ['About', 'Get started', 'Sign in', 'Contact Us'];

export default MenuList;
