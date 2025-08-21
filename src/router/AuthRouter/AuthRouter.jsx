import { Route, Routes } from "react-router-dom";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default AuthRouter;