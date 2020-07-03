import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
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
import Banner from '../components/Banner'

export const ProductWrap = styled.div`
  width: 100%;
  padding: 28vh 0 10vh;
  background-color: ${(props) => props.theme.colors.white};
`
const StyledContainer = styled(Container)`
  width: ${(props) => props.theme.sizes.maxWidthMedium};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`
const StyledRow = styled(Row)`
  width: 100%;
`
const Title = styled.h5`
  text-align: center;
  margin: 0 0 16vh;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 1.2rem;
`
const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 9vh 0 0;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: 600;
  position: relative;
  width: 130px;

  ::after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.black};
    transition: all ease-in-out 0.3s;
  }
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
      <div className="scroll" ref={scrollRef}>
        <Header />
        <Hero />
        <Featured />
        <New />
        <ProductWrap
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          <Title>Our must-haves</Title>
          <StyledContainer fluid>
            <StyledRow>
              {edges.map(({ node }) => {
                const { id, frontmatter } = node
                const { cover, path, title, date } = frontmatter
                return (
                  <Product
                    key={id}
                    cover={cover.childImageSharp.fluid}
                    path={path}
                    title={title}
                    date={date}
                  />
                )
              })}
            </StyledRow>
          </StyledContainer>
          <StyledLink to="/">All our products</StyledLink>
        </ProductWrap>
        <Banner />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
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
                  traceSVG: { color: "#f2f2f2" }
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
