import React from 'react'
import Col from 'react-bootstrap/Col'

import { StyledLogo } from "./style"

const Logo = () => {
    return (
        <Col xs={6} lg={3}>
            <StyledLogo>Red Alder</StyledLogo>
        </Col>
    )
}

export default Logo
