import styled from 'styled-components'
import { motion } from 'framer-motion'
import BackgroundImage from 'gatsby-background-image'

export const PinkBg = styled(motion.div)`
    width: 100vw;
    background-color: ${props => props.theme.colors.pink};
    position: absolute;
    z-index: 9999;
    left: 0;
`
export const SliderWrap = styled(motion.div)`
    position: relative;
    z-index: 97;
    top: 0;
    width: 100vw;
    height: 100vh;

    :hover {
        cursor: grab;
    }

    .slick-dots {
        bottom: 20px;

        li button::before {
            color: ${props => props.theme.colors.white};
            opacity: 0.6;
            transition: opacity ease-in-out 0.1s;

            :hover {
                opacity: 1;
            }
        }
        li.slick-active button::before {
            opacity: 1;
        }
    }
`
export const StyledBackground = styled(BackgroundImage)`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Text = styled.div`
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Inner = styled.div`
    width: ${props => props.theme.sizes.maxWidthCentered};
    color: ${props => props.theme.colors.white};

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        width: ${props => props.theme.sizes.maxWidth};
    }
`
export const Title = styled(motion.p)`
    font-size: ${props => props.theme.fontSize.large};
    letter-spacing: -1px;
    margin-bottom: 20px;

    sup {
        font-size: ${props => props.theme.fontSize.small};
    }
`
export const Discover = styled(motion.p)`
    a {
        color: ${props => props.theme.colors.white};
        position: relative;
        font-weight: 600;

        ::after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            width: 0;
            height: 1px;
            background-color: ${(props) => props.theme.colors.white};
            transition: all ease-in-out 0.3s;
        }

        :hover {
            color: ${props => props.theme.colors.white};

            ::after {
                opacity: 1;
                width: 100%;
            }
        }
    }
`