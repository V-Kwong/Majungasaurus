import React, { Component } from 'react';
import styles from './main.module.css';
import Logo from '../images/black-dinosaur-logo-clip-art-png-clip-art.png';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.topContainer}>
          <img src={Logo} className={styles.logo} alt=""/>
          <h1 className={styles.text}>
            Majungasaurus
          </h1>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.slogan}>
            Challenge <span className={styles.sloganHighlight}>Natural Selection</span>
          </p>
          <div className={styles.line} />
        </div>
      </div>
    )
  }
}
