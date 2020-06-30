import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledDrawer = styled.div`
    width: 100vw;
    height: 90vh;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.pink};
    top: 0;
    left: 0;
    z-index: 98;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s;
    transform-origin: top;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`
export const StyledUl = styled.ul`
    width: 100%;
    text-align: center;
`
export const StyledLink = styled(Link)`
    font-size: ${props => props.theme.fontSize.medium};
    font-family: ${props => props.theme.fonts.serif};
    line-height: 2;
`