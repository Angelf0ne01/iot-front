import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`
const Container = styled.div`
display: inline-block;
position: relative;
width: 40px;
height: 40px;

div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
    border: 4px solid #1270A6;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1270A6 transparent transparent transparent;
}
div:nth-child(1) {
    animation-delay: -0.45s;
}
div:nth-child(2) {
    animation-delay: -0.3s;
}
div:nth-child(3) {
    animation-delay: -0.15s;
}
`

export const Loading = () => <Container><div></div><div></div><div></div><div></div></Container>