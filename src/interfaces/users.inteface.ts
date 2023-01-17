export interface IUser {
  name: string;
  email: string;
  password: string;
  crmv: number;
  address: {
    district: string;
    zipCode: string;
    number: string;
    city: string;
    state: string;
    street: string;
    complement: string;
  };
}
