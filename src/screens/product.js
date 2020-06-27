import React, { Component } from 'react';
import styles from './product.module.css';


export default class Product extends Component {
  render() {
    const { title, text } = this.props

    return (
      <div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div>
            <p className={styles.textLine}>
              {text}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
