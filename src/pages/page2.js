import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Page 2" />
    <Link to="/">Now navigate back and the image will size correctly</Link>
  </Layout>
)

export default IndexPage
