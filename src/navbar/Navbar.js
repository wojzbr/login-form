import './navbar.css'
import {useEffect} from 'react'
import Button from '../button/Button';
import LoggedUser from '../loggedUser/LoggedUser';
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    useEffect(()=>{
        document.getElementById("app").addEventListener("touchend", ()=>{
            document.getElementById("buttonsWrapper").style.right="-70vw"
        })
    },[])
    
    return(
        <div id="navbarWrapper">
            <LoggedUser />
            <div id="buttonsWrapper">
                <Button link="/login-form/protected" buttonText="PROTECTED" />
                <Button link="/login-form/" buttonText="HOME" filled={true}/>
                <Button link="/login-form/login" buttonText="LOGIN" />
                <Button link="/login-form/signin" buttonText="CREATE ACCOUNT" filled={true}/>
            </div>
            <div id="burgerMenuWrapper" onClick={()=>{
                document.getElementById("buttonsWrapper").style.right==="0px"?
                    document.getElementById("buttonsWrapper").style.right="-70vw":
                    document.getElementById("buttonsWrapper").style.right="0px";
            }}>
                <AiOutlineMenu size={40}/>
            </div>
        </div>
    )
}

export default Navbar;