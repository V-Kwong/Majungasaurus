import React, { Component } from 'react';
import styles from './product.module.css';
import { DiscoverButton } from '../components/discoverButton';


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
            <DiscoverButton>Discover {title}</DiscoverButton>
          </div>
        </div>
      </div>
    )
  }
}
