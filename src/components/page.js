import React, { Component } from 'react';
// import Div100vh from 'react-div-100vh'
import PropTypes from 'prop-types';
import styles from './page.module.css';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.bool,
  tip: PropTypes.bool,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}