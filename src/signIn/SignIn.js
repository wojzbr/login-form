import './signIn.css'
import { useState } from 'react'

const SignIn = () => {

    const [passwordConfirmed, setPasswordConfirmed] = useState(false);

    var check = function() {
        if (document.getElementById('password').value === document.getElementById('signInConfirmPassword').value) {
            setPasswordConfirmed(true)
        }
        else {
            setPasswordConfirmed(false)
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Passwords do not match';
        }
    }

    return (
        <form id="logInForm">
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter email" name="email" id="signInEmail" required />

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter username" name="username" id="signInUsername" required />

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter password" name="password" id="signInPassword" onKeyUp={check} required />

            <label for="confirmPassword"><b>Confirm password</b></label>
            <input type="password" placeholder="Confirm password" name="confirmPassword" id="signInConfirmPassword"  onKeyUp={check} required /> 
            <span id='message'></span>

            <button type="submit" className="button buttonFilled" onClick={(e)=>{
                if (!passwordConfirmed){
                    e.preventDefault();
                    alert("CANNOT SEND FORM - PASSWORD DOESN'T MATCH")
                }
            }}>CREATE ACCOUNT</button>
        </form>
    )
}

export default SignIn