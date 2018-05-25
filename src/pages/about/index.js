import React from 'react'
import PropTypes from 'prop-types'
// import ReactIframeResizer from 'react-iframe-resizer-super'
//
// const iframeResizerOptions = {
//   checkOrigin: false,
// }

const About = ({children}) => {
  return (
    <div>
      <h2>About page</h2>
      <div>
        {/* <ReactIframeResizer
          src="https://mb.snuggpro.com/question/144"
          iframeResizerOptions={iframeResizerOptions}
        /> */}
        {/* <iframe
          src="https://mb.snuggpro.com/public/question/2614cf7d-327c-4929-a75c-06264aad41e6"
          frameBorder="0"
          width="800"
          height="600"
        /> */}
        {/* <iframe
          src="https://mb.snuggpro.com/question/144"
          frameBorder={'0'}
          width={'100%'}
          height={'100%'}
        /> */}
      </div>
    </div>
  )
}

About.propTypes = {
  children: PropTypes.func,
}

export default About
