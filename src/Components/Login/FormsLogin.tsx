import { useContext } from "react";
import { useForm } from "react-hook-form/dist/useForm";
import { AuthContext } from "../../providers/authProvider";
import { schemaLogin } from "../../validations/login";
import { Forms } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormsLogin = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ILoginUser>({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (dataLogin: ILoginUser) => {
    loginUser(dataLogin);
  };

  return (
    <>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Username" type="text" />
        <input placeholder="Password" type="password" />
      </Forms>
    </>
  );
};
