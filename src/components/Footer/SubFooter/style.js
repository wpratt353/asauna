import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FooterWrap = styled(Row)`
  position: relative;
  max-width: 100vw;
  padding: 80px 0;
  display: none;

  h3 {
    font-size: 13px;
    font-family: ${(props) => props.theme.fonts.sans};
    margin-bottom: 15px;
  }
  p {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    div:after {
      content: '';
      width: 25px;
      height: 1px;
      background: #111;
      opacity: 0.2;
      display: block;
      margin: 20px auto;
    }
    div:last-of-type:after {
      display: none;
    }
  }
`

export const StyledCol = styled(Col)`
  text-align: center;
  padding: 0 0;
  a {
    position: relative;
  }
  a:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #111;
    visibility: hidden;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }
  a:hover:before {
    visibility: visible;
    width: 100%;
  }
`
