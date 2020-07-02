import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import locomotiveScroll from 'locomotive-scroll'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Featured from '../components/Product/Featured'
import New from '../components/Product/New'
import Product from '../components/Product'

const StyledContainer = styled(Container)`
  
`

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const scrollRef = React.createRef()
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  })

  return (
    <>
      <SEO title="Home" />
      <Header />
      <div className="scroll" ref={scrollRef}>
        <Hero />
        <Featured />
        <New />
        <StyledContainer>
          <Row>
            {edges.map(({ node }) => {
              const { id, excerpt, frontmatter } = node
              const { cover, path, title, date } = frontmatter
              return (
                <Product
                  key={id}
                  cover={cover.childImageSharp.fluid}
                  path={path}
                  title={title}
                  date={date}
                  excerpt={excerpt}
                />
              )
            })}
          </Row>
        </StyledContainer>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
