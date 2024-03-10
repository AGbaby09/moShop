import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav id="Navbar" className="spEven">
            <NavLink to="/">
                <i className="bx bx-home-alt-2"></i>
            </NavLink>
            <NavLink to="/">
            <i className='bx bx-cart-alt'></i>
            </NavLink>
            <NavLink to="/">
                <i className="bx bx-heart"></i>
            </NavLink>
            <NavLink to="/">
                <i className="bx bx-user"></i>
            </NavLink>
        </nav>
    )
}

export default Navbar;