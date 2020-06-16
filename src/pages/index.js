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
          <div style={{
            height: '65vh',
            width: '100vw',
            maxHeight: '65%',
            maxWidth: '100%',
            // backgroundColor: '#654311',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
            <img src={Logo} className={styles.logo} alt=""/>
            <h1 style={{ color: 'white' }}>Majungasaurus</h1>
          </div>
          <div style={{
            height: '35vh',
            width: '100vw',
            maxHeight: '35%',
            maxWidth: '100%',
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
      <Page>
        <h1 style={{ color: 'white' }}>Apatosaurus</h1>
      </Page>
      <Page>
        <h1 style={{ color: 'white' }}>Brontosaurus</h1>
      </Page>
      <Page>
        <h1 style={{ color: 'white' }}>Brachiosaurus</h1>
      </Page>
      <Page>
        <div style={{
          marginTop: '15vh',
          marginLeft: '5vw',
          marginRight: '15vw',
          marginBottom: '10vh',
          height: '75vh',
          width: '80vw',
          paddingTop: '5vh',
          paddingLeft: '2.5vw',
          paddingRight: '2.5vw',
          paddingBottom: '5vh',
          // backgroundColor: '#654311',
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center',
          // justifyContent: 'flex-end',
        }}>
          <h1 style={{ color: 'white' }}>Allosaurus</h1>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            Allosaurus (/ˌæləˈsɔːrəs/[2][3]) is a genus of carnivorous theropod dinosaur that lived 155 to 145 million years ago during the late Jurassic period (Kimmeridgian to late Tithonian[4]). The name "Allosaurus" means "different lizard" alluding to its unique concave vertebrae (at the time of its discovery). It is derived from the Greek ἄλλος (allos) ("different, other") and σαῦρος (sauros) ("lizard / generic reptile"). 
          </p>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            The first fossil remains that could definitively be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles. 
          </p>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            Allosaurus was a large bipedal predator. Its skull was large and equipped with dozens of sharp, serrated teeth.
          </p>
        </div>
      </Page>
    </div>
  )
}

export default IndexPage
