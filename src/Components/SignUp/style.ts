import styled from "styled-components";

export const FormSignUp = styled.form`
  background-color: var(--main-color2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-top: 10px;
  border-radius: 12px;
  margin-bottom: 30px;


  .DivAllInput {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
  }

  input {
    display: block;
    font-family: var(--font);
    border: none;
    border-radius: 15px;
    height: 30px;
    width: 85vw;
    margin-top:5px;
  }
  
  label{
    font-family: var(--font);
    text-align: left;
    color: var(--white);
  }

  .divPassword {
    display: flex;
    gap: 10px;
  }

  .inputPassword {
    width: 40vw;
    margin-top: 5px;
  }

  .divAddress{
    margin-top: 25px;
  }

  .divComplement{
    margin-top: 20px;
  }

  .divStreetAndNumber{
    display: flex;
    margin-top: 20px;
    gap: 10px;
    margin-top:20px
  }


  .inputStreet{
    width: 60vw;
  }

  .inputNumber{
    width: 20vw;
  }

  .divAdressCEP{
    display: flex;
    gap: 10px;
    margin-top:20px
  }

  .inputAdressCEP{
    width: 40vw;
  }

  .divState{
    display: flex;
    gap: 10px;
    margin-top:20px

  }

  .inputAdressState{
    width: 40vw;
  }

  .divBtn{
    margin: 30px;
    display: flex;
    gap: 20px;
  }

  button{
    font-family: var(--font);
    color: var(--black);
    border: none;
    height: 40px;
    width: 39vw;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  button:hover{
    background-color: #D9D9D9;
  }


  @media (min-width: 768px) {
    width: 500px;

    input{
        width: 30vw;
    }
    .inputPassword {
    width: 14.5vw;
  }

  .inputStreet{
    width: 21vw;
  }

  .inputNumber{
    width: 8vw;
  }

  .inputAdressCEP{
    width: 14.5vw;
  }

  .inputAdressState{
    width: 14.5vw;
  }

  button{
    width: 14.5vw;
  }

  }
`;
