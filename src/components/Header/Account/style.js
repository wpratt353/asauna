import styled from 'styled-components'
import { Link } from 'gatsby'
import Col from 'react-bootstrap/Col'

export const StyledAccount = styled(Col)`
    text-align: right;

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media screen and (min-width: ${props => props.theme.responsive.medium}) {
            margin-right: 20px;
        }

        li {
            padding-left: 20px;
        }
        li:first-of-type {
            display: none;

            @media screen and (max-width: ${props => props.theme.responsive.large}) {
                display: inline-block;
            }
        }
    }

    .account-link {
        color: #fff;
        position: relative;

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
        color: ${({ open }) => (open ? '#111' : '#fff')};
        transition: 0.5s color ease-in-out 0.2s;
        font-size: 0.9rem !important;
    }
`