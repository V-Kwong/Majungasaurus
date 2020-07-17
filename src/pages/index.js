import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { Link } from "gatsby"

import styles from './index.module.css';
import Page from '../components/page';
import Main from '../screens/main';
import About from '../screens/about';
import Product from '../screens/product';
import Contact from '../screens/contact';

import Logo from '../images/black-dinosaur-logo-clip-art-png-clip-art.png';
import { LogoButton } from '../components/logoButton';

export default class IndexPage extends Component {

  scrollToTop = () => {
    const { scrollbars } = this.refs;
    scrollbars.view.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <Scrollbars
        ref='scrollbars'
        style={{ width: '100vw', height: '100vh' }}
      >

        <Page>
          <Main />
        </Page>
      
        <LogoButton>
          <img src={Logo} className={styles.logo} alt="" onClick={this.scrollToTop}/>
        </LogoButton>

        <Page>
          <About />
        </Page>

        <div className={styles.overlay}>
          <div className={styles.social}>
            <a href="#" target="_blank">
              <span className={styles.socialIconCircle}>
                <FacebookIcon
                  className={styles.socialIcon}
                  fontSize='small'
                  color='inherit'
                />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className={styles.socialIconCircle}>
                <TwitterIcon
                  className={styles.socialIcon}
                  fontSize='small'
                  color='inherit'
                />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className={styles.socialIconCircle}>
                <InstagramIcon
                  className={styles.socialIcon}
                  fontSize='small'
                  color='inherit'
                />
              </span>
            </a>
          </div>
          <div>
            <p className={styles.copyright}> © 2020 Majungasaurus. All rights reserved.</p>
          </div>
        </div>

        <Page>
          <Product
            title='Brachiosaurus'
            text='Most Iconic and initially thought to be one of the Largest Dinosaurs.'
          />
        </Page>
        <Page>
          <Product
            title='Edmontosaurus'
            text='Herbivore that could move on both Two Legs and Four. Flex.'
          />
        </Page>
        <Page>
          <Contact />
        </Page>
      </Scrollbars>
    )
  }
}
