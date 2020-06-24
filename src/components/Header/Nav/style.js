import styled from 'styled-components'
import Col from "react-bootstrap/Col"
import { Link } from 'gatsby'

export const StyledNav = styled(Col)`
    text-align: center;
    display: none;

    ul {
        display: flex;
        justify-content: space-evenly;
    }
`
export const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 0.9rem;
`