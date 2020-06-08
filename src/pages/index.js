import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Page from '../components/page';

const IndexPage = () => {
  const divStyle = {
    background: 'linear-gradient(141deg, #d32f2f 0%, #bb2f2f 51%, #922f2f 75%)'
  };
  return (
    <div style={divStyle}>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Page>Majungasaurus</Page>
      <Page>Apatosaurus</Page>
      <Page>Brontosaurus</Page>
      <Page>Brachiosaurus</Page>
      <Page>Allosaurus</Page>
    </div>
  )
}

export default IndexPage
