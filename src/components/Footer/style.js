import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.smoke};

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    height: 100vh;
  }
`
export const SubFooterRow = styled(Row)`
  background-color: ${props => props.theme.colors.white};
  padding: 4rem 4rem 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }
`
export const SubFooterCol = styled(Col)`
  p {
    font-size: 0.8rem;
    line-height: 3;
  }

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    margin-bottom: 2rem;
  }
`
export const FooterRow = styled(Row)`
  padding: 4rem 4rem 4rem 8rem;

  .mobile-hide {
    display: initial;
  }

  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 2rem 1rem;
    position: absolute;
    bottom: 0;

    .mobile-hide {
      display: none;
    }
  }
`
export const FooterCol = styled(Col)`
  h3 {
    font-size: ${(props) => props.theme.fontSize.xsmall};
    font-family: ${(props) => props.theme.fonts.sans};
    margin-bottom: 15px;
  }

  ul {
    font-size: 13px;
  }
  ul:first-of-type {
    margin-bottom: 15px;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.xxsmall};
    line-height: 2;
  }

  hr {
    opacity: 0;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    margin-bottom: 2rem;
  }
`
export const StyledLink = styled(Link)`
  font-size: ${props => props.theme.fontSize.xxsmall};
  line-height: 2;
  display: block;
`
export const IconLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
`
export const Email = styled.input`
  border: 2px solid #c6c4c1;
  padding-left: 25px;
  width: 70%;
  height: 50px;
  transition: border 0.4s cubic-bezier(0.26, 1.04, 0.54, 1);

  :focus {
    border-color: #111;
    outline-offset: -2px;
  }
`
export const Submit = styled.input`
  border: 2px solid #c6c4c1;
  width: 20%;
  height: 50px;
  padding: 0 20px;
  margin-left: -2px;
  transition: border 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);

  :hover,
  :active {
    border-color: #111;
  }
`