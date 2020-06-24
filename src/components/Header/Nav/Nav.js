import React from 'react'

import links from '../../../constants/links'
import { StyledNav, StyledLink } from "./style"

const Nav = () => {
    return (
      <StyledNav xs={6} className="d-lg-block">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <StyledLink to={link.path}>{link.text}</StyledLink>
              </li>
            )
          })}
        </ul>
      </StyledNav>
    )
}

export default Nav
