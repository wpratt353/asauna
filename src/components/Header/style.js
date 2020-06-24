import styled from 'styled-components'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

export const HeaderWrap = styled(Container)`
    position: relative;
    transition: 0.5s color ease-in-out 0.2s;
    color: ${({ open }) => (open ? '#fff' : '#111')};
`
export const StyledRow = styled(Row)`
    align-items: center;
`