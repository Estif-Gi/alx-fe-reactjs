import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { userId } = useParams();
    return ( 
         <h2 style={{margin:"50px"}}>Viewing Profile of User ID: {userId}</h2>
     );
}
 
export default UserProfile;