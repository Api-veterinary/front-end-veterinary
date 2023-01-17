import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;


  p{
    font-family: "Inter", sans-serif;
    font-size: 13px;    
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SignIn = styled.section`
  width: 100vw;
  height: 50vh;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 40px;
  }


  button{
    font-family: 'Inter', sans-serif;
    background-color: var(--main-color2);
    border: none;
    width: 120px;
    height: 34px;
    border-radius: 15px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover{
    background-color: var(--main-color);
    transition: 2s;
  }

  @media (min-width: 768px) {
    height: 100vh;
    gap: 50px;

    button{
       height :38px ;
    }
  }
`;

export const LandImage = styled.section`
  width: 100vw;
  background-color: var(--main-color);
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 220px;
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 100vh;

    img {
      width: 410px;
      height: 510px;
    }
  }
`;
