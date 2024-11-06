import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "672883f3fa6ca8270f5cb6ec",
  //   name: "mira",
  //   emailId: "mira@gmail.com",
  //   mobile: "",
  //   password: "$2b$10$qLdr1e2nRPf4JKZqe8CpwO1ogKwi141Cnblh/jgPjUFveu5sofBKi",
  //   gender: "",
  //   bio: "",
  //   address: "",
  //   profilePic: "",
  //   coverPic: "",
  //   followers: [],
  //   following: [],
  // },
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
