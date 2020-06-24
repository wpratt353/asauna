import React from 'react'
import SimpleLineIcon from 'react-simple-line-icons';

import MobileBtn from '../MobileBtn'
import { StyledAccount, StyledLink } from "./style"

const Account = ({ open, setOpen }) => {
  return (
    <StyledAccount xs={6} lg={3}>
      <ul>
        <li>
          <MobileBtn open={open} setOpen={setOpen} />
        </li>
        <li>
          <StyledLink
            to="/"
            className="account-link"
            open={open}
            setOpen={setOpen}
          >
            <span>My account</span>
            <span>
              <SimpleLineIcon name="user" />
            </span>
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/" open={open} setOpen={setOpen}>
            <SimpleLineIcon name="heart" />
          </StyledLink>
        </li>

        <li>
          <StyledLink to="/" open={open} setOpen={setOpen}>
            <SimpleLineIcon name="basket" />
          </StyledLink>
        </li>
      </ul>
    </StyledAccount>
  )
}

export default Account
