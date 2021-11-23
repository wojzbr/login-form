import './logIn.css'
import photoPlaceholder from '../media/photoPlaceholder.png'
import {Navigate, useNavigate} from 'react-router-dom'

const LogIn = ({ setIsAuthenticated }) => {
    
    let navigate = useNavigate();

    const authenticate = () => {
        if (document.getElementById("logInUsername").value === "user" && document.getElementById("logInPassword").value === "pass"){
            setIsAuthenticated({name: "Wojciech"})
            navigate('/login-form/protected', {replace: true});
        }
        else alert ("Wrong credentials")
    }

    return (
        <form className="logSignForm" id="logInForm">

            <div id="logInUserPhoto">
                <img src={photoPlaceholder} alt="random user avatar" />
            </div>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" id="logInUsername" required />

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="logInPassword" required />

            <button type="submit" className="button buttonFilled" onClick={()=>authenticate()}>LOGIN</button>
            <label>
                <input type="checkbox" name="remember" /> Remember me
            </label>
        </form>
    )
}

export default LogIn