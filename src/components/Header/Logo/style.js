import styled from 'styled-components'

export const StyledLogo = styled.h1`
    transition: 0.5s color ease-in-out 0.2s;
    color: ${({ open }) => (open ? '#fff' : '#111')};
    
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        font-size: 2rem;
    }
`