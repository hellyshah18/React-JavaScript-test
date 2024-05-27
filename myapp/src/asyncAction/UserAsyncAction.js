import { UserError, UserRequest, UserSuc } from "../action/userAction";

export const getUserList = (page = 1) =>  async dispatch => {
    dispatch(UserRequest());
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      dispatch(UserSuc(data));
    } catch (err) {
      dispatch(UserError(err.message));
    }
  }