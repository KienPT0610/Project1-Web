export interface User {
  email: string;
  password: string;
}

export type TUserData = {
  id: number;
  email: string;
  password: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
};
