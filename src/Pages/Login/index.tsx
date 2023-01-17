import { Main, SignIn, LandImage } from "./style";
import { FormsLogin } from "../../Components/Login/FormsLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import img from "../../Assets/landPage.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";
import { ILoginUser } from "../../services/session/login";
import { schemaLogin } from "../../validations/login";

export const Login = () => {
  

  return (
    <Main>
      <SignIn>
        <h1>LOGIN</h1>
        <FormsLogin />
        <button>
          LOGIN <HiOutlineArrowNarrowRight size={30} />{" "}
        </button>
        <p>
          Ainda não é cadastrado? <Link to={"/register"}>clique aqui </Link>
        </p>
      </SignIn>

      <LandImage>
        <img src={img} alt="person with dog" />
      </LandImage>
    </Main>
  );
};
