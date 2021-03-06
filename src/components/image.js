import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      placeholderImageLg: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={[
        data.placeholderImage.childImageSharp.fixed,
        {
          ...data.placeholderImageLg.childImageSharp.fixed,
          media: "(min-width: 5000px)",
        },
      ]}
    />
  )
}

export default Image
