import React from 'react'
import Col from 'react-bootstrap/Col'

import { StyledLogo, StyledLink } from "./style"

const Logo = ({ open, setOpen }) => {
  return (
    <Col xs={6} lg={3}>
      <StyledLogo open={open} setOpen={setOpen}>
        <StyledLink to="/">RedAlder</StyledLink>
      </StyledLogo>
    </Col>
  )
}

export default Logo
