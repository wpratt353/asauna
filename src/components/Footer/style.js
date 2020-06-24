import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export const FooterWrap = styled(Container)`
  position: relative;
  max-width: 100vw;
  padding: 4rem 4rem 4rem 8rem;
  background-color: ${(props) => props.theme.colors.smoke};

  h3 {
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.sans};
    margin-bottom: 15px;
  }
  ul {
    font-size: 13px;
  }
  ul:first-of-type {
    margin-bottom: 15px;
  }
`

export const NoMobile = styled(Col)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileCol = styled(Col)`
  div {
    display: inline;
    margin-right: 30px;
  }
`

export const FormWrap = styled.form`
  margin-top: 20px;
`

export const Email = styled.input`
  border: 2px solid #c6c4c1;
  padding-left: 25px;
  height: 50px;
  transition: border 0.4s cubic-bezier(0.26, 1.04, 0.54, 1);

  :focus {
    border-color: #111;
    outline-offset: -2px;
  }
`

export const Submit = styled.input`
  border: 2px solid #c6c4c1;
  height: 50px;
  padding: 0 20px;
  margin-left: -2px;
  transition: border 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);

  :hover,
  :active {
    border-color: #111;
  }
`
