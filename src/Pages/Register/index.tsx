import { SignUpForm } from "../../Components/SignUp";
import { MainSignUp } from "./style";
import img from "../../Assets/pata.png";

export const SignUp = () => {
  return (
    <MainSignUp>
      <img src={img} alt="" />
      <h1>CADASTRO</h1>
      <SignUpForm />
    </MainSignUp>
  );
};
