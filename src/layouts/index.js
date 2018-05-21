import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import styles from './index.module.css'

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet title="Home" />
    <Navbar />
    <div className={styles.contentWrapper}>
      <div className="ui grid">
        <div className="eight wide column">
          <h1>From Templates</h1>
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

/* <div>{children()}</div> */
