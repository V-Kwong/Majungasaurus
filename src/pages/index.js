import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Page from '../components/page';
import styles from './index.module.css';
import Logo from '../images/black-dinosaur-logo-clip-art-png-clip-art.png';

const IndexPage = () => {
  const divStyle = {
    fontFamily: 'Oxygen',
    background: 'linear-gradient(141deg, #d32f2f 0%, #bb2f2f 51%, #922f2f 75%)',
    maxWidth: '400',
  };
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "black-dinosaur-logo-clip-art-png-clip-art.png" }) {
  //       childImageSharp {
  //         # Specify a fluid image and fragment
  //         # The default maxWidth is 800 pixels
  //         fixed(
  //           width: 800,
  //           # duotone: {
  //           #   highlight: "#f00e2e",
  //           #   shadow: "#192550"
  //           # }
  //         ) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div style={divStyle}>
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
          <div style={{
            height: '65vh',
            width: '100vw',
            // backgroundColor: '#654311',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end' 
          }}>
            <img src={Logo} className={styles.logo} alt=""/>
            <h1 style={{ fontFamily: 'Oxygen', color: 'white' }}>Majungasaurus</h1>
          </div>
          <div style={{
            height: '35vh',
            width: '100vw',
            paddingTop: '15vh',
            // backgroundColor: '#123456',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>Challenge <span style={{ marginBottom: 0, color: '#ffe001' }}>Natural Selection</span></p>
            <div
              style={{
                flex: 1,
                width: '1px',
                marginTop: '0.75em',
                marginBottom: '1em',
                background: '#ffe001 none repeat scroll 0% 0%',
              }}
            />
          </div>
      </Page>
      {/* <Page>Apatosaurus</Page>
      <Page>Brontosaurus</Page>
      <Page>Brachiosaurus</Page>
      <Page>Allosaurus</Page> */}
    </div>
  )
}

export default IndexPage
