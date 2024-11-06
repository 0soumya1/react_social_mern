import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Signup.css";
import axios from "axios";
import { BASE_URL, REGISTER_USER } from "../../utils/Strings";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = async (e) => {
    // e.preventDefault(); // prevents the page from refreshing
    let url = BASE_URL + REGISTER_USER;
    let data = {
      name: name,
      emailId: email,
      password: password,
    };
    console.log(data, "data");
    try {
      const res = await axios.post(url, data);
      localStorage.setItem("user", JSON.stringify(res?.data?.data));
      navigate("/login");
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div className="card2">
      <div className="heading">Register</div>

      <div>
        <TextField
          size="small"
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      {error && !name && (
        <span className="invalid-input">Enter Valid Name</span>
      )}

      <div>
        <TextField
          variant="outlined"
          size="small"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      {error && !email && (
        <span className="invalid-input">Enter Valid Email</span>
      )}
      <div>
        <TextField
          variant="outlined"
          size="small"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      {error && !password && (
        <span className="invalid-input" style={{ marginLeft: "-60px" }}>
          Enter Valid Password
        </span>
      )}

      <Button
        size="small"
        style={{ width: "100px" }}
        variant="contained"
        onClick={() => handleSignupClick()}
      >
        SignUp
      </Button>
    </div>
  );
};

export default SignUp;
