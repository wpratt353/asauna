import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledLogo = styled.h1`
    font-size: 2rem;
    font-family: 'Italiana', serif;
    font-weight: 600;

    @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
        margin-left: 20px;
    }
    @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
        font-size: 2rem;
    }
`
export const StyledLink = styled(Link)`
    transition: 0.5s color ease-in-out 0.2s;
    position: relative;
    color: ${({ open }) => (open ? '#fff' : '#fff')};

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