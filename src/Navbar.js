import './navbar.css'
import Button from './Button';

const Navbar = () => {
    return(
        <div id="navbarWrapper">
            <Button buttonText="LOGIN" />
            <Button buttonText="CREATE ACCOUNT" filled={true}/>
        </div>
    )
}

export default Navbar;