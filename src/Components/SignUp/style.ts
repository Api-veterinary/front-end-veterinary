import styled from "styled-components";

export const FormSignUp = styled.form`
  background-color: var(--main-color2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 12px;
  margin-bottom: 30px;

  .DivAllInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px;
    width: 100%;
  }

  input {
    display: block;
    font-family: var(--font);
    border: none;
    border-radius: 15px;
    height: 30px;
    width: 100%;
    margin-top: 5px;
  }

  label {
    font-family: var(--font);
    width: 90%;
    color: var(--white);
  }

  .divPassword {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    label {
      width: 45%;
      input {
        width: 90%;
      }
    }
  }

  .inputPassword {
    width: 100%;
    margin-top: 5px;
  }

  .divAddress {
    margin-top: 25px;
    width: 90%;
  }

  .divComplement {
    margin-top: 20px;
  }

  .divStreetAndNumber {
    display: flex;
    margin-top: 20px;
    gap: 10px;
    margin-top: 20px;
  }

  .divAdressCEP {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .divState {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .inputAdressState {
    width: 100%;
  }

  .divBtn {
    margin: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: center;
    button {
      font-family: var(--font);
      color: var(--black);
      border: none;
      width: 45%;
      height: 40px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
    }
    p {
      font-family: "Inter", sans-serif;
      font-size: 12px;
    }
  }

  button:hover {
    background-color: #d9d9d9;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;
