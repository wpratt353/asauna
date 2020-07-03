import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'

export const StyledCol = styled(Col)`
    padding: 5vh 6vw;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        padding: 1vh 2vw;
    }
`
export const StyledLink = styled(Link)`
    position: relative;
    display: block;
`
export const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${props => props.theme.fontSize.medium};
    padding: 0 2vw;
    opacity: 0;
    transition: opacity 1.2s cubic-bezier(0.2, 0, 0.175, 1) 0s;

    :hover {
        opacity: 1;
    }
`