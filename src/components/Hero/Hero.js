import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { PinkBg, SliderWrap, Text, Inner, Title, Discover } from './style'

export default function Hero() {
  var settings = {
    dots: true,
    arrows: false,
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
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero2: file(relativePath: { eq: "hero/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero3: file(relativePath: { eq: "hero/3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          hero4: file(relativePath: { eq: "hero/4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <PinkBg
            animate={{
              top: ['150vh', '0vh', '0vh'],
              height: ['0vh', '100vh', '0vh'],
            }}
            transition={{
              delay: 1,
              duration: 1,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              loop: false,
            }}
          />

          <SliderWrap
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
            animate={{
              opacity: ['0%', '100%'],
            }}
            transition={{
              delay: 0,
              duration: 1,
              ease: 'easeInOut',
              times: [0, 1],
              loop: false,
            }}
          >
            <Slider {...settings}>
              <div>
                <BackgroundImage
                  fadeIn
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
                <Text>
                  <Inner>
                    <Title
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      Cane Sofa<sup>210</sup>
                    </Title>
                    <Discover
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2.2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      <Link to="/">Discover</Link>
                    </Discover>
                  </Inner>
                </Text>
              </div>
              <div>
                <BackgroundImage
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero4.childImageSharp.fluid}
                  style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                />
                <Text>
                  <Inner>
                    <Title
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      Cane Sofa<sup>210</sup>
                    </Title>
                    <Discover
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2.2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      <Link to="/">Discover</Link>
                    </Discover>
                  </Inner>
                </Text>
              </div>
              <div>
                <BackgroundImage
                  fadeIn
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
                <Text>
                  <Inner>
                    <Title
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      Cane Sofa<sup>210</sup>
                    </Title>
                    <Discover
                      animate={{
                        opacity: ['0%', '100%'],
                      }}
                      transition={{
                        delay: 2.2,
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 1],
                        loop: false,
                      }}
                    >
                      <Link to="/">Discover</Link>
                    </Discover>
                  </Inner>
                </Text>
              </div>
            </Slider>
          </SliderWrap>
        </>
      )}
    />
  )
}
