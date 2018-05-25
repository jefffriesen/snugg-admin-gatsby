import React, {Component} from 'react'
import Link from 'gatsby-link'
// import {Dropdown, Menu} from 'semantic-ui-react'
import cx from 'classnames'
import styles from './Navbar.module.css'

// <div className="ui sidebar inverted vertical menu visible">
export default class Navbar extends Component {
  state = {activeItem: 'account'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      <div className={styles.sidebar}>
        <div className="ui secondary vertical menu inverted">
          <div className="item">
            <div className="header">Snugg Tools</div>
            <div className="menu">
              <Item to="/intercom" label="Intercom" {...activeItem} />
              <Item to="/about" label="MB: Billings" {...activeItem} />
              <Item to="/about" label="MB: Support" {...activeItem} />
              <Item to="/about" label="MB: Stats" {...activeItem} />
              <Item to="/about" label="MB: Optimiser" {...activeItem} />
              <Item
                to="/about"
                label="Prosperworks Activity Feed"
                {...activeItem}
              />
              <Item to="/about" label="Snugg Knowledge Base" {...activeItem} />
              <Item to="/about" label="SnuggPro Debug" {...activeItem} />
              <Item to="/about" label="Google Analytics" {...activeItem} />
              <Item to="/about" label="Heap User Tracking" {...activeItem} />
              <Item to="/about" label="Quickbooks Online" {...activeItem} />
              <Item to="/about" label="OM Sessions" {...activeItem} />
              <Item
                to="/about"
                label="G Sheets: Dev Priorities"
                {...activeItem}
              />
              <Item to="/about" label="G Sheets: Users" {...activeItem} />
            </div>
          </div>
          <div className="item">
            <div className="header">External References</div>
            <div className="menu">
              <Item to="/about" label="HPXML Validation Tool" {...activeItem} />
              <Item
                to="/about"
                label="Green Button Validation Tool"
                {...activeItem}
              />
              {/* http://dmdvalidator.greenbuttonalliance.org */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Item = ({label, to, activeItem}) => {
  return (
    <span className="item">
      <Link
        to={to}
        className={cx('navbar-item', styles.sidebarItem)}
        activeClassName="active">
        {label}
      </Link>
    </span>
  )
}
