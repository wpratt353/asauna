import React from 'react'
import { bool, func } from 'prop-types'
import SimpleLineIcon from 'react-simple-line-icons'

import { Button } from "./style"

const MobileBtn = ({ open, setOpen }) => {
  return (
    <Button open={open} onClick={() => setOpen(!open)}>
      <SimpleLineIcon name="menu" />
    </Button>
  )
}

MobileBtn.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default MobileBtn
