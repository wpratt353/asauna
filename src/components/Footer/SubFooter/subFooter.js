import React from 'react'

import { FooterWrap, StyledCol } from './style'

const SubFooter = () => {
  return (
    <FooterWrap>
      <StyledCol md={4}>
        <h3>
          <a href="#">Secure Payment</a>
        </h3>

        <p>
          Visa, American Express, Mastercard <br /> - free of charge
        </p>
      </StyledCol>
      <StyledCol md={4}>
        <h3>
          <a href="#">Delivery</a>
        </h3>

        <p>Home Delivery on Your Schedule</p>
      </StyledCol>
      <StyledCol md={4}>
        <h3>
          <a href="#">Customer Service</a>
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
