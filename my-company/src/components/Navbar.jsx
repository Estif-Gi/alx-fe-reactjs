import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div style={{position:'absolute',left:'9px',top:'15px'}}>
        <nav>
      <ul style={{listStyle:'none',display:'flex',gap:'20px'}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    )
}