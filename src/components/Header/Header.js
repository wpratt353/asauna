import React, { useState } from 'react'
import Headroom from 'react-headroom'

import Logo from './Logo'
import Nav from './Nav'
import Account from './Account'
import Drawer from './Drawer'
import { HeaderWrap, StyledRow } from "./style"

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Headroom open={open} setOpen={setOpen}>
          <HeaderWrap fluid>
            <StyledRow>
              <Logo />
              <Nav />
              <Account open={open} setOpen={setOpen} />
            </StyledRow>
          </HeaderWrap>
        </Headroom>

        <Drawer open={open} setOpen={setOpen} />
      </>
    )
}

export default Header
