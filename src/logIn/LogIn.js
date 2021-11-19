import './logIn.css'
import photoPlaceholder from '../media/photoPlaceholder.png'
import {Navigate} from 'react-router-dom'
const LogIn = ({ setIsAuthenticated }) => {
    
    const authenticate = () => {
        setIsAuthenticated(true)
    }

    return (
        <form id="logInForm">

            <div id="logInUserPhoto">
                <img src={photoPlaceholder} alt="random user avatar" />
            </div>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button type="submit" className="button buttonFilled" onClick={()=>authenticate()}>LOGIN</button>
            <label>
                <input type="checkbox" name="remember" /> Remember me
            </label>
        </form>
    )
}

export default LogIn