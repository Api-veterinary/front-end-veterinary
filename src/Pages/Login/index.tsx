import { Main, SignIn, LandImage } from "./style";
import { FormsLogin } from "../../Components/Login/FormsLogin";
import img from "../../Assets/landPage.png";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export const Login = () => {
  return (
    <Main>
      <SignIn>
        <h1>LOGIN</h1>
        <FormsLogin/>
        <button>LOGIN <HiOutlineArrowNarrowRight size={30}/> </button>
        <p>Ainda não é cadastrado? clique aqui</p>
      </SignIn>
      

      <LandImage>
        <img src={img}alt="person with dog"
        />
      </LandImage>
    </Main>
  );
};
