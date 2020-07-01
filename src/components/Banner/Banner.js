import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Background, Text, Title, StyledLink } from './style'

export default function Banner() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

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
          banner2: file(relativePath: { eq: "banner/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          banner3: file(relativePath: { eq: "banner/3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          banner4: file(relativePath: { eq: "baner/4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <Background
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
        >
          <Text>
            <Title>
              I have been passionate about <span>creating</span> simple, 
              <span>beautiful,</span> & colorful furniture <span>designs</span>
            </Title>
            <StyledLink to="/">Discover our history</StyledLink>
          </Text>

          <Slider {...settings}>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </Slider>
        </Background>
      )}
    />
  )
}
