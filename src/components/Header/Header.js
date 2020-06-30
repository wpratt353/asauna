import React, { useState } from 'react'

import Logo from './Logo'
import Nav from './Nav'
import Account from './Account'
import Drawer from './Drawer'
import { HeaderWrap, Animation, StyledRow } from './style'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <HeaderWrap fluid>
          <Animation
            animate={{
              opacity: ['0%', '100%'],
            }}
            transition={{
              delay: 1.9,
              duration: 0.7,
              ease: 'easeInOut',
              times: [0, 1],
              loop: false,
            }}
          >
            <StyledRow>
              <Logo open={open} setOpen={setOpen} />
              <Nav />
              <Account open={open} setOpen={setOpen} />
            </StyledRow>
          </Animation>
        </HeaderWrap>

        <Drawer open={open} setOpen={setOpen} />
      </>
    )
}

export default Header
