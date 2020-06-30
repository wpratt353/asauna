import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FeaturedWrap = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.grey};
`
export const StyledContainer = styled(Container)``
export const StyledRow = styled(Row)``
export const StyledCol = styled(Col)``