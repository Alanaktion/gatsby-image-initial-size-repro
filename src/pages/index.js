import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      This image will be sized incorrectly on most viewports (&lt;5000px), but
      only on production-mode builds, and only on the initial pageload.
      <br />
      The image should render at 32px for any reasonably-sized viewport, but the
      inline <code>style</code> set by <code>gatsby build</code> matches the
      larger image rather than the default, and only switches when the component
      re-renders client-side.
    </p>
    <Image />
    <br />
    <Link to="/page2">Navigate here</Link>
  </Layout>
)

export default IndexPage
