import { http } from "../index";
import {User} from "../../../store/auth/authSlice";

export const fetchUser = async (userId: number) => {
  try {
    return await http.get(`/users/${userId}`) as User;
  } catch (error) {
    console.error(error)
  }
}

