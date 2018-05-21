import React, {Component} from 'react'
import Link from 'gatsby-link'
import {Dropdown, Menu} from 'semantic-ui-react'
import styles from './Navbar.module.css'

// <div className="ui sidebar inverted vertical menu visible">
export default class Navbar extends Component {
  state = {activeItem: 'account'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      <div className={styles.sidebar}>
        <Menu secondary vertical inverted>
          <Menu.Item
            name="account"
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="settings"
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
          />
          <Dropdown item text="Display Options">
            <Dropdown.Menu>
              <Dropdown.Item>Small</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  }
}

/* <nav className="navbar is-transparent">
  <div className="container">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </figure>
      </Link>
    </div>
    <div className="navbar-start">
      <Link className="navbar-item" to="/about" activeClassName="active">
        About
      </Link>
      <Link className="navbar-item" to="/products" activeClassName="active">
        Products
      </Link>
    </div>
    <div className="navbar-end">
      <a
        className="navbar-item"
        href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <img src={github} alt="Github" />
        </span>
      </a>
    </div>
  </div>
  <Menu secondary vertical>
    <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick} />
    <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick} />
    <Dropdown item text='Display Options'>
      <Dropdown.Menu>
        <Dropdown.Header>Text Size</Dropdown.Header>
        <Dropdown.Item>Small</Dropdown.Item>
        <Dropdown.Item>Medium</Dropdown.Item>
        <Dropdown.Item>Large</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
</nav> */

// export default Navbar
