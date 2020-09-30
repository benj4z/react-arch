import { AppThunk } from "../index";
import { fetchUser } from "../../api/services/User";
import { getUserFailed, getUserStart, getUserSuccess } from "./userSlice";

export const getUser = (userId: string): AppThunk => async dispatch => {
  try {
    dispatch(getUserStart());
    const user = await fetchUser(userId);
    dispatch(getUserSuccess(user))
  } catch(error) {
    dispatch(getUserFailed(error))
  }
}
