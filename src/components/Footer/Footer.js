import React from 'react'
import SimpleLineIcon from 'react-simple-line-icons'
import { motion } from 'framer-motion'

import {
  StyledContainer,
  SubFooterRow,
  SubFooterCol,
  FooterRow,
  FooterCol,
  StyledLink,
  IconLink,
  Email,
  Submit
} from './style'

const Footer = () => {
  return (
    <motion.div
      animate={{
        opacity: ['0%', '100%'],
      }}
      transition={{
        delay: 2,
        duration: 1,
        ease: 'easeInOut',
        times: [0, 1],
        loop: false,
      }}
    >
      <StyledContainer fluid>
        <SubFooterRow>
          <SubFooterCol xs={12} md={4}>
            <p>Secure payment</p>
            <p>Visa, American Express, Mastercard and 3x free</p>
          </SubFooterCol>
          <SubFooterCol xs={12} md={4}>
            <p>Delivery</p>
            <p>Home Delivery on Your Schedule</p>
          </SubFooterCol>
          <SubFooterCol xs={12} md={4}>
            <p>Customer service</p>
            <p>9:30am - 6:30pm Monday to Friday</p>
          </SubFooterCol>
        </SubFooterRow>

        <FooterRow>
          <FooterCol xs={12} md={3}>
            <h3>Help</h3>
            <p>Write us</p>
            <StyledLink to="/">info@redalder.com</StyledLink>
            <hr />
            <StyledLink to="/">Terms of sale</StyledLink>
            <StyledLink to="/">FAQ</StyledLink>
            <StyledLink to="/">Shipping</StyledLink>
            <StyledLink to="/">My Account</StyledLink>
          </FooterCol>
          <FooterCol xs={12} md={3}>
            <h3>About</h3>
            <StyledLink to="/">The Brand</StyledLink>
            <StyledLink to="/">Designer</StyledLink>
            <StyledLink to="/">Terms & Conditions</StyledLink>
          </FooterCol>
          <FooterCol xs={12} md={3}>
            <h3>Address</h3>
            <StyledLink to="/">Store locator</StyledLink>
            <StyledLink to="/">Login to the reseller area</StyledLink>
          </FooterCol>
          <FooterCol xs={12} md={3} className="mobile-hide">
            <h3>Follow us</h3>
            <IconLink to="/">
              <SimpleLineIcon name="social-instagram" />
            </IconLink>
            <IconLink to="/">
              <SimpleLineIcon name="social-facebook" />
            </IconLink>
            <IconLink to="/">
              <SimpleLineIcon name="social-pinterest" />
            </IconLink>
            <hr />
            <form>
              <h3>Newsletter</h3>
              <hr />
              <Email type="email" placeholder="E-mail" />
              <Submit type="submit" value=">" />
            </form>
          </FooterCol>
        </FooterRow>
      </StyledContainer>
    </motion.div>
  )
}

export default Footer
