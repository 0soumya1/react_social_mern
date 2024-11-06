import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Messanger from "./components/messanger/Messanger";
import SignUp from "./components/signup/Signup";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/messanger" element={<Messanger />} />
          </Route>

          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
