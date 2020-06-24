import styled from 'styled-components'
import { Link } from 'gatsby'
import Col from 'react-bootstrap/Col'

export const StyledAccount = styled(Col)`
    text-align: right;

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
            padding-left: 20px;
        }
        li:first-of-type {
            display: none;
            @media screen and (max-width: ${props => props.theme.responsive.medium}) {
                display: inline-block;
            }
        }
    }

    .account-link {
        span:last-of-type {
            display: none;
        }
        @media screen and (max-width: ${props => props.theme.responsive.medium}) {
            span:first-of-type {
                display: none;
            }
            span:last-of-type {
                display: block;
            }
        }
    }
`
export const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 0.8rem;

    div {
        color: ${({ open }) => (open ? '#fff' : '#111')};
        transition: 0.5s color ease-in-out 0.2s;
        font-size: 0.9rem !important;
    }
`