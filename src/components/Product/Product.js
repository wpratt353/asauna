import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProductWrap, StyledContainer } from "./style"

const Product = ({ cover, path, date, title, excerpt }) => {
  return (
    <>
      <Img fluid={cover} />
      <Link to={path}>
        <div>
          <span>{date}</span>
          <h2>{title}</h2>
          <span>{excerpt}</span>
        </div>
      </Link>
    </>
  )
}

export default Product
