import React from 'react'
import { Link } from 'gatsby'

import { FooterWrap, StyledCol } from './style'

const SubFooter = () => {
  return (
    <FooterWrap>
      <StyledCol md={4}>
        <h3>
          <Link to="/">Secure Payment</Link>
        </h3>

        <p>
          Visa, American Express, Mastercard <br /> - free of charge
        </p>
      </StyledCol>
      <StyledCol md={4}>
        <h3>
          <Link to="/">Delivery</Link>
        </h3>

        <p>Home Delivery on Your Schedule</p>
      </StyledCol>
      <StyledCol md={4}>
        <h3>
          <Link to="/">Customer Service</Link>
        </h3>

        <p>
          9:30am-6:30pm Monday to Friday <br />
          +1 (123) 456 7890 / email_address
        </p>
      </StyledCol>
    </FooterWrap>
  )
}

export default SubFooter
