import './navbar.css'
import Button from '../button/Button';
import LoggedUser from '../loggedUser/LoggedUser';

const Navbar = () => {
    return(
        <div id="navbarWrapper">
            <LoggedUser />
            <Button buttonText="LOGIN" />
            <Button buttonText="CREATE ACCOUNT" filled={true}/>
        </div>
    )
}

export default Navbar;