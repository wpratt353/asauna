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
    position: relative;
    color: #fff;

    ::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        width: 0;
        height: 1px;
        background-color: ${(props) => props.theme.colors.white};
        transition: all ease-in-out 0.3s;
    }

    :hover {
        color: ${props => props.theme.colors.white};

        ::after {
            opacity: 1;
            width: 100%;
        }
    }
`