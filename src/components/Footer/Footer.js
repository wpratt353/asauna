import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SimpleLineIcon from 'react-simple-line-icons'

import {
  FooterWrap,
  NoMobile,
  MobileCol,
  FormWrap,
  Email,
  Submit,
} from './style'

const Footer = () => {
  return (
    <FooterWrap>
      <Row>
        <NoMobile md={3}>
          <h3>Help</h3>
          <ul>
            <a href="#">
              <li>Write us</li>
            </a>
            <a href="#">
              <li>EMAIL_ADDRESS</li>
            </a>
          </ul>
          <ul>
            <a href="#">
              <li>Terms of sale</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Shipping</li>
            </a>
            <a href="#">
              <li>My account</li>
            </a>
          </ul>
        </NoMobile>
        <NoMobile md={3}>
          <h3>About</h3>
          <ul>
            <a href="#">
              <li>The Brand</li>
            </a>
            <a href="#">
              <li>Designer</li>
            </a>
            <a href="#">
              <li>Terms & Conditions</li>
            </a>
          </ul>
        </NoMobile>
        <NoMobile md={3}>
          <h3>Address</h3>
          <ul>
            <a href="">
              <li>Store locator</li>
            </a>
            <a href="">
              <li>Login to the reseller area</li>
            </a>
          </ul>
        </NoMobile>
        <MobileCol s={12} md={3}>
          <h3>Follow us</h3>
          <a href="#">
            <SimpleLineIcon name="social-instagram" />
          </a>
          <a href="#">
            <SimpleLineIcon name="social-facebook" />
          </a>
          <a href="#">
            <SimpleLineIcon name="social-pinterest" />
          </a>
          <FormWrap>
            <h3>Newsletter</h3>
            <Email type="email" placeholder="E-mail" />
            <Submit type="submit" value=">" />
          </FormWrap>
        </MobileCol>
      </Row>
    </FooterWrap>
  )
}

export default Footer
