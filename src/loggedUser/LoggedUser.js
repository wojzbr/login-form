import './loggedUser.css'
import photoPlaceholder from '../media/photoPlaceholder.png'

const LoggedUser = ({loggedUser}) => {
    return (
        <div id="loggedUserWrapper">
            <div id="loggedUserPhoto">
                <img src={loggedUser?loggedUser.photo:photoPlaceholder} alt="random user avatar" />
            </div>
            <div id="loggedUserGreeting">
                {loggedUser?"Welcome, "+loggedUser.name:"You are not logged in."}
            </div>
        </div>
    )
}

export default LoggedUser