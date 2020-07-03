import React from 'react'
import Img from 'gatsby-image'

import { StyledCol, StyledLink, Title } from './style'

const Product = ({ cover, path, title }) => {
  return (
    <StyledCol xs={6} md={4}>
      <StyledLink to={path}>
        <Img fluid={cover} />
        <Title>{title}</Title>
      </StyledLink>
    </StyledCol>
  )
}

export default Product
