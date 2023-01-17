import { FormSignUp } from "./style";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export const SignUpForm = () => {
  return (
    <FormSignUp>
      <div className="DivAllInput">
        <label htmlFor="name">
          Nome
          <input type="text" />
        </label>

        <label htmlFor="email">
          Email
          <input type="text" />
        </label>

        <label htmlFor="crmv">
          CRMV
          <input type="text" />
        </label>
      </div>

      <div className="divPassword">
        <label htmlFor="password">
          Senha
          <input className="inputPassword" type="text" />
        </label>

        <label htmlFor="password">
          Confirmar Senha
          <input className="inputPassword" type="text" />
        </label>
      </div>

      <div className="divAddress">
        <label htmlFor="adress">Endereço</label>
        <div className="divStreetAndNumber">
          <label htmlFor="">
            Rua
            <input className="inputStreet" type="text" />
          </label>
          <label htmlFor="">
            Número
            <input className="inputNumber" type="text" />
          </label>
        </div>

        <div className="divComplement">

        <label htmlFor="">
          Complemento
          <input type="text" />
        </label>

        </div>
        <div className="divAdressCEP">
          <label htmlFor="">
            Bairro
            <input className="inputAdressCEP" type="text" />
          </label>

          <label htmlFor="">
            CEP
            <input className="inputAdressCEP" type="text" />
          </label>
        </div>

        <div className="divState">

        <label htmlFor="">
          Cidade
          <input className="inputAdressState" type="text" />
        </label>

        <label htmlFor="">
          Estado
          <input className="inputAdressState" type="text" />
        </label>
        </div>
      </div>

    <div className="divBtn">
        <button>Cadastrar</button>
        <button>Login <HiOutlineArrowNarrowRight size={30}/> </button>

    </div>


    </FormSignUp>
  );
};
