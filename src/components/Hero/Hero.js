import React, { useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import locomotiveScroll from "locomotive-scroll"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SliderWrap } from './style'

export default function Hero() {
  const scrollRef = React.createRef()
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <StaticQuery
      query={graphql`
        query Hero {
          hero1: file(relativePath: { eq: "hero/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero2: file(relativePath: { eq: "hero/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero3: file(relativePath: { eq: "hero/3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <SliderWrap className="scroll" ref={scrollRef}>
          <Slider {...settings}>
            <div>
              <BackgroundImage
                Tag="div"
                className="hero-image"
                fluid={data.hero1.childImageSharp.fluid}
                style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div>
              <BackgroundImage
                Tag="div"
                className="hero-image"
                fluid={data.hero2.childImageSharp.fluid}
                style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div>
              <BackgroundImage
                Tag="div"
                className="hero-image"
                fluid={data.hero3.childImageSharp.fluid}
                style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </Slider>
        </SliderWrap>
      )}
    />
  )
}
