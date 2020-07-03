import React, { Component } from 'react';
import styles from './product.module.css';
import { DiscoverButton } from '../components/discoverButton';


export default class Product extends Component {
  render() {
    const { title, text } = this.props

    return (
      <div>
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="textLine">
            {text}
          </p>
          <p className={styles.discoverContainer}>
            <DiscoverButton>
              Discover {title}
            </DiscoverButton>
          </p>
        </div>
      </div>
    )
  }
}
