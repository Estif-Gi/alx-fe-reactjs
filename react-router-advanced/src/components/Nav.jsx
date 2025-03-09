import {Link} from "react-router-dom"
import Profile from "./bach"
import UserProfile from "./UserProfile"


const Nav = () => {
// const style = ()=>({
//     display:"flex",
//     flexDirection:"column",
//     position:"absolute",

// })
    return ( 
        <div style={{position:'absolute',justifyContent:'center',left:'-5px',top:'3px' }}>
            <nav>

                <ul style={{listStyle: "none",display:'flex',gap:'20px', textDecoration:'none'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/users/:userId">userProfile</Link></li>
                    <li><Link to="/blog/:id">user blog</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    
                </ul>
            </nav>
                    <button style={{position:'absolute', left:'300px'}}><Link to="/logIn">Log In</Link></button>
        </div>
     );
}
 
export default Nav;