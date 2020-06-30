import styled from 'styled-components'
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const HeaderWrap = styled(Container)`
    position: absolute;
    top: 25px;
    z-index: 99;
`
export const Animation = styled(motion.div)`
    position: relative;
`
export const StyledRow = styled(Row)`
    align-items: center;
`