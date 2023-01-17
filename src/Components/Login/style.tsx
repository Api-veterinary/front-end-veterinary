import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  input {
    width: 220px;
    height: 30px;
    border: none;
    background-color: #d9d9d9;
    border-radius: 15px;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }

  input::placeholder{
    text-align: center;
    color: black;
    font-weight: 600;
    font-size: 12px;
  }


  @media(min-width:768px){
    input{
        width: 350px;
        height: 40px;
    }
  }


`;
