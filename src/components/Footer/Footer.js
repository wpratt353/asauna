import React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
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
            <Link to="/">
              <li>Write us</li>
            </Link>
            <Link to="/">
              <li>EMAIL_ADDRESS</li>
            </Link>
          </ul>
          <ul>
            <Link to="/">
              <li>Terms of sale</li>
            </Link>
            <Link to="/">
              <li>FAQ</li>
            </Link>
            <Link to="/">
              <li>Shipping</li>
            </Link>
            <Link to="/">
              <li>My account</li>
            </Link>
          </ul>
        </NoMobile>
        <NoMobile md={3}>
          <h3>About</h3>
          <ul>
            <Link to="/">
              <li>The Brand</li>
            </Link>
            <Link to="/">
              <li>Designer</li>
            </Link>
            <Link to="/">
              <li>Terms & Conditions</li>
            </Link>
          </ul>
        </NoMobile>
        <NoMobile md={3}>
          <h3>Address</h3>
          <ul>
            <Link to="/">
              <li>Store locator</li>
            </Link>
            <Link to="/">
              <li>Login to the reseller area</li>
            </Link>
          </ul>
        </NoMobile>
        <MobileCol s={12} md={3}>
          <h3>Follow us</h3>
          <Link to="/">
            <SimpleLineIcon name="social-instagram" />
          </Link>
          <Link to="/">
            <SimpleLineIcon name="social-facebook" />
          </Link>
          <Link to="/">
            <SimpleLineIcon name="social-pinterest" />
          </Link>
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
