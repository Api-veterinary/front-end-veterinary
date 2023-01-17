import styled from "styled-components";

export const MainSignUp = styled.main`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

img{
    display: none;
}


h1{
    margin-top: 30px;
    font-family: var(--font);
    font-weight: 700;
    font-size: 32px;
}

@media(min-width:950px){
    img{
        display: inline;
        position: absolute;
        left: 8vw;
        top: 5vw;
        width: 130px;
    }
}

`
