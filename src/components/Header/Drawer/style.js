import styled from 'styled-components'

export const StyledDrawer = styled.div`
    width: 100vw;
    height: 90vh;
    position: fixed;
    background-color: ${({ theme }) => theme.colors.green};
    top: 0;
    left: 0;
    z-index: 98;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s;
    transform-origin: top;
`