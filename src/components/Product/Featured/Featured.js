import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Popup from '../../Popup'
import {
  FeaturedWrap,
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledBackground,
  StyledLink,
  Collection,
  Name,
  StyledModal,
} from './style'

export default function Featured() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StaticQuery
      query={graphql`
        query Featured {
          featured1: file(relativePath: { eq: "featured/1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          featured2: file(relativePath: { eq: "featured/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <FeaturedWrap
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
          >
            <StyledContainer>
              <StyledRow>
                <StyledCol
                  xs={12}
                  lg={5}
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                >
                  <StyledBackground
                    fadeIn="soft"
                    Tag="div"
                    fluid={data.featured1.childImageSharp.fluid}
                  >
                    <StyledLink onClick={handleShow}>
                      <Collection>Collection</Collection>
                      <Name>Cane 210</Name>
                    </StyledLink>
                  </StyledBackground>
                </StyledCol>

                <StyledCol
                  xs={12}
                  lg={{ span: 5, offset: 2 }}
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-position="top"
                >
                  <StyledBackground
                    fadeIn="soft"
                    Tag="div"
                    fluid={data.featured2.childImageSharp.fluid}
                  >
                    <StyledLink onClick={handleShow}>
                      <Collection>Collection</Collection>
                      <Name>Cane 160</Name>
                    </StyledLink>
                  </StyledBackground>
                </StyledCol>
              </StyledRow>
            </StyledContainer>
          </FeaturedWrap>

          <StyledModal show={show} onHide={handleClose}>
            <Popup />
          </StyledModal>
        </>
      )}
    />
  )
}