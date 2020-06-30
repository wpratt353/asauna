import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FeaturedWrap } from "./style"

const Featured = () => {
    return (
      <FeaturedWrap
        data-scroll
        data-scroll-speed="1"
        data-scroll-position="top"
      >
        <Container>
          <Row>
            <Col xs={12} md={6}>
              1
            </Col>
            <Col xs={12} md={6}>
              2
            </Col>
          </Row>
        </Container>
      </FeaturedWrap>
    )
}

export default Featured
