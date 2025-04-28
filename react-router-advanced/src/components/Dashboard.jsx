import { useAuth } from "./AuthContext";
import { replace, useNavigate } from "react-router-dom";

function Dashboard() {
  const {logout , isAuthenticated} = useAuth();
  const navigate = useNavigate()
  const handleLogeOut = () =>{
    logout();
    navigate("/logIn" , {replace : true})
  }
  console.log(isAuthenticated)
  // if(!isAuthenticated){
  // }
    return (
    <>
    <h2 style={{margin:"80px"}}>Welcome to the Dashboard! Only logged-in users can see this.</h2>
    <button onClick ={handleLogeOut}>Log out</button>

    </>
    )
  }
  
  export default Dashboard;
  