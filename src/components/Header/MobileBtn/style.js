import styled from 'styled-components'

export const Button = styled.div`
    transition: 0.5s color ease-in-out 0.2s;
    color: ${({ open }) => (open ? '#fff' : '#fff')};
    
    :hover {
        cursor: pointer;
    }
`