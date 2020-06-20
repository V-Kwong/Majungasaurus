import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from './index.module.css';
import Page from '../components/page';
import Main from '../screens/main';
import About from '../screens/about';


const IndexPage = () => {
  const divStyle = {
    // fontFamily: 'Oxygen',
    // background: 'linear-gradient(141deg, #d32f2f 0%, #bb2f2f 51%, #922f2f 75%)',
    // maxWidth: '400',
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
      <Page>
        <About />
      </Page>
    </div>
  )
}

export default IndexPage
