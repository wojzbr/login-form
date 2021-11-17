import './navbar.css'
import Button from '../button/Button';
import LoggedUser from '../loggedUser/LoggedUser';

const Navbar = () => {
    return(
        <div id="navbarWrapper">
            <LoggedUser />
            <Button link="/" buttonText="HOME" filled={true}/>
            <Button link="/login" buttonText="LOGIN" />
            <Button link="/signin" buttonText="CREATE ACCOUNT" filled={true}/>
        </div>
    )
}

export default Navbar;