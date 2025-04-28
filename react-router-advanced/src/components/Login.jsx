import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login , isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // console.log(isAuthenticated)

  const handleLogin = () => {
    login();
  };

  if(isAuthenticated){
    navigate("/dashboard" , {replace: true})
  }

  return (
    <div>
      <h2 style={{margin:"50px"}}>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
