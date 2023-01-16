import styled from "styled-components";

export const Main = styled.main`

width: 100vw;
display: flex;
flex-direction: column;
height: 100vh;

@media(min-width:768px){
    flex-direction: row-reverse;
}

`

export const SignIn = styled.section`
width: 100vw;
height: 50vh;
background-color: red;

@media(min-width:768px){
    height: 100vh;
}

`

export const LandImage = styled.section`
width: 100vw;
background-color: blue ;
height: 50vh;

@media(min-width:768px){
    height: 100vh;
}
`