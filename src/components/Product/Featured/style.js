import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FeaturedWrap = styled.div`
    position: relative;
    width: 100vw;
    padding-top: 20vh;
    background-color: ${props => props.theme.colors.grey};

    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        height: 140vh;
    }
`
export const StyledContainer = styled(Container)`
    width: 100%;
    height: 100%;
    max-width: ${props => props.theme.sizes.maxWidthMedium};
`
export const StyledRow = styled(Row)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const StyledCol = styled(Col)`
    height: 85vh;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        height: 400px;
    }
`
export const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all ease-in-out 0.5s;
    background-color: ${props => props.theme.colors.green};
`
export const StyledLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
    position: relative;
    z-index: 99;

    :hover {
        color: ${props => props.theme.colors.white};
    }
`
export const Collection = styled.div`
    font-size: ${props => props.theme.fontSize.xsmall};
`
export const Name = styled.div`
    font-size: ${props => props.theme.fontSize.large};
    letter-spacing: -1px;
`