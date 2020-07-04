import React, { Component } from 'react';
import styles from './contact.module.css';
import { Email } from '../components/email';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Contact</h1>
          <table>
            <tr>
              <th>
                <p className={styles.emailLine}>
                  Majungasaurus:
                </p>
              </th>
              <th>
                <p className={styles.emailLine}>
                  <Email href="mailto:majunga@saurus.com">majunga@saurus.com</Email>
                </p>
              </th> 
            </tr>
            <tr>
              <th>
                <p className={styles.emailLine}>
                  Brachiosaurus:
                </p>
              </th>
              <th>
                <p className={styles.emailLine}>
                  <Email href="mailto:brachio@saurus.com">brachio@saurus.com</Email>
                </p>
              </th> 
            </tr>
            <tr>
              <th>
                <p className={styles.emailLine}>
                  Edmontosaurus:
                </p>
              </th>
              <th>
                <p className={styles.emailLine}>
                  <Email href="mailto:edmonto@saurus.com">edmonto@saurus.com</Email>
                </p>
              </th> 
            </tr>
          </table>
          {/* <p className={styles.emailLine}>
            Majungasaurus: <Email href="mailto:majunga@saurus.com">majunga@saurus.com</Email>
          </p>
          <p className={styles.emailLine}>
            Brachiosaurus: <Email href="mailto:brachio@saurus.com">brachio@saurus.com</Email>
          </p>
          <p className={styles.emailLine}>
            Edmontosaurus: <Email href="mailto:edmonto@saurus.com">edmonto@saurus.com</Email>
          </p> */}
        </div>
      </div>
    )
  }
}
