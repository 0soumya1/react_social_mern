import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLoginClick = (e) => {
    // e.preventDefault(); // prevents the page from refreshing
    let data = {
      emailId: email,
      password: password,
    };
    loginCall(
      // { email: email.current.value, password: password.current.value },
      data,
      dispatch,
      navigate
    );
  };
  // console.log("user---------", user);
  return (
    <div className="card2">
      <div className="heading">SignIn</div>

      <div>
        <TextField
          size="small"
          variant="outlined"
          // type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div>
        <TextField
          size="small"
          variant="outlined"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <Button
        size="small"
        variant="contained"
        onClick={() => handleLoginClick()}
      >
        {isFetching ? <CircularProgress color="white" size="20px" /> : "Save"}
      </Button>
      <br />

      <button className="signupButton" onClick={() => navigate("/signup")}>
        Create a New Account
      </button>
    </div>
  );
}

export default Login;
