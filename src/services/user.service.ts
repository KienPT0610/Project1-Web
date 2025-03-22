import { User } from "../types/user.type";

export const fetchAPI = async (): Promise<User[]> => {
  const res = await fetch("https://fakestoreapi.com/users");
  return await res.json();
};
