import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const ProductWrap = styled.div`
    width: 100%;
    padding: 20vh 0;
    background-color: ${props => props.theme.colors.white};
`
export const StyledContainer = styled(Container)`
    width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`