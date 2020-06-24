import styled from 'styled-components'

export const StyledLogo = styled.h1`
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        font-size: 2rem;
    }
`