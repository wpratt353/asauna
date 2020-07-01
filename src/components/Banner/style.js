import styled from 'styled-components'
import { Link } from 'gatsby'

export const Background = styled.div`
    width: 100vw;
    padding: 30vh;
    background-color: ${props => props.theme.colors.yellow};
`
export const Text = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    text-align: center;
`
export const Title = styled.h2`
    width: ${props => props.theme.sizes.maxWidthSmall};
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    font-family: ${props => props.theme.fonts.sans};
    text-align: center;
    font-size: ${props => props.theme.fontSize.xmedium};
    margin-bottom: 7vh;
    line-height: 1.3;

    span {
        font-family: ${props => props.theme.fonts.serif};
    }
`
export const StyledLink = styled(Link)`
    margin-bottom: 10vh;
    text-transform: uppercase;
    display: inline-block;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize.xxsmall};
    font-weight: 600;
`