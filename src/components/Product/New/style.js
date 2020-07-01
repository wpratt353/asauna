import styled from 'styled-components'
import { Link } from 'gatsby'
import Slider from 'react-slick'

export const Background = styled.div`
  width: 100vw;
  padding: 30vh 0 5vh;
  background-color: ${(props) => props.theme.colors.yellow};
`
export const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
`
export const Title = styled.h2`
  width: ${(props) => props.theme.sizes.maxWidthSmall};
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  font-family: ${(props) => props.theme.fonts.sans};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.xmedium};
  margin-bottom: 7vh;
  line-height: 1.3;

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
      width: 98%;
      font-size: ${props => props.theme.fontSize.small};
  }

  span {
    font-family: ${(props) => props.theme.fonts.serif};
  }
`
export const StyledLink = styled(Link)`
  margin-bottom: 14vh;
  text-transform: uppercase;
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.xxsmall};
  font-weight: 600;
`
export const StyledSlider = styled(Slider)`
    .slick-next {
        right: 20px;
    }
    .slick-prev {
        left: 20px;
    }
    .slick-prev, 
    .slick-next {
        z-index: 999;
        width: 40px;
        height: 40px;

        ::before {
            font-size: 40px;
        }
    }
`
export const Slide = styled.div`
    position: relative;

    .new-image {
        background-color: ${(props) => props.theme.colors.black};
        margin: 0 30px;
    }
`
export const SlideText = styled.div`
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.medium};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        font-size: ${props => props.theme.fontSize.small};
    }
`