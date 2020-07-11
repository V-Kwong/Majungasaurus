import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars';
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

  componentDidMount() {
    window.addEventListener("scroll", this.scrollToTop); // remove brackets ()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollToTop);
}

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Scrollbars 
        style={{ width: '100vw', height: '100vh' }}
      >

        <Page>
          <Main />
        </Page>
      
        <LogoButton onClick={this.scrollToTop}>
          <img src={Logo} className={styles.logo} alt=""/>
        </LogoButton>
        <Page>
          <About />
        </Page>
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
