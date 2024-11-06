import axios from "axios";
import { BASE_URL, LOGIN_USER } from "./utils/Strings";

export const loginCall = async (userCredential, dispatch, navigate) => {
  let url = BASE_URL + LOGIN_USER;
  console.log(userCredential, "userCredential");
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(url, userCredential);
    localStorage.setItem("user", JSON.stringify(res?.data?.data));
    dispatch({ type: "LOGIN_SUCCESS", payload: res?.data });
    navigate("/messanger");
    // console.log("res-----------", res);
  } catch (err) {
    dispatch({ type: "LOGIN_FALIURE", payload: err });
  }
};
