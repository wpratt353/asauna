import React from 'react'
import { bool } from 'prop-types'

import links from '../../../constants/links'
import { StyledDrawer, StyledUl, StyledLink } from './style'

const Drawer = ({ open }) => {
  return (
    <StyledDrawer open={open}>
      <StyledUl open={open}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <StyledLink to={link.path}>{link.text}</StyledLink>
            </li>
          )
        })}
      </StyledUl>
    </StyledDrawer>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
