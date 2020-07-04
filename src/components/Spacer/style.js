import styled from 'styled-components'

export const PageWrap = styled.div`
  margin-bottom: 30vh;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    margin-bottom: 100vh;
  }
`