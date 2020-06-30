import React from 'react'
import Col from 'react-bootstrap/Col'

import { StyledLogo, StyledLink } from "./style"

const Logo = ({ open, setOpen }) => {
  return (
    <Col xs={6} lg={3}>
      <StyledLogo>
        <StyledLink to="/" open={open} setOpen={setOpen}>
          RedAlder
        </StyledLink>
      </StyledLogo>
    </Col>
  )
}

export default Logo
