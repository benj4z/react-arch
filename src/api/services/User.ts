import { http } from "../index";
import User from "../../models/User";

export const fetchUser = async (userId: string) => {
  try {
    return await http.get(`/users/${userId}`) as User;
  } catch (error) {
    console.error(error)
  }
}
