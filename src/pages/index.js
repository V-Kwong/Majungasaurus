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
        {/* <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        <Page>
          <Main />
        </Page>
        {/* <Page>
          <h1 style={{ color: 'white' }}>Apatosaurus</h1>
        </Page>
        <Page>
          <h1 style={{ color: 'white' }}>Brontosaurus</h1>
        </Page>
        <Page>
          <h1 style={{ color: 'white' }}>Brachiosaurus</h1>
        </Page> */}
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
