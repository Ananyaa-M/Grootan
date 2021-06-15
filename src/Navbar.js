import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <header className="header">
		        <h1 className="logo"><a href="#">Grootan</a></h1>
                <ul className="main-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
	        </header> 
        </div>
    );
}
 
export default Navbar;