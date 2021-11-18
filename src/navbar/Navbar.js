import './navbar.css'
import Button from '../button/Button';
import LoggedUser from '../loggedUser/LoggedUser';
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return(
        <div id="navbarWrapper">
            <LoggedUser />
            <div id="buttonsWrapper">
                <Button link="/" buttonText="HOME" filled={true}/>
                <Button link="/login" buttonText="LOGIN" />
                <Button link="/signin" buttonText="CREATE ACCOUNT" filled={true}/>
            </div>
            <div id="burgerMenuWrapper">
                <AiOutlineMenu size={40}/>
            </div>
        </div>
    )
}

export default Navbar;