import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

export const StyledBackground = styled(BackgroundImage)`
    width: 100vw;
    height: 110vh;
    margin: 15vh 0 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.green};
`
export const Title = styled.p`
    font-size: ${props => props.theme.fontSize.large};
    color: ${props => props.theme.colors.green};
    margin: 0 0 5vh;
`
export const StyledLink = styled(Link)`
    display: block;
    text-align: center;
    color: ${props => props.theme.colors.green};
    font-weight: 600;
    width: 110px;
    position: relative;

    ::after {
        content: ' ';
        background-color: ${props => props.theme.colors.green};
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`