import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { StyledBackground, Title, StyledLink } from './style'

export default function Banner() {
  return (
    <StaticQuery
      query={graphql`
        query Banner {
          banner1: file(relativePath: { eq: "banner/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledBackground
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
          fadeIn
          Tag="div"
          className="banner-image"
          fluid={data.banner1.childImageSharp.fluid}
        >
          <Title>Red Alder Apartment</Title>
          <StyledLink to="/">Discover</StyledLink>
        </StyledBackground>
      )}
    />
  )
}
