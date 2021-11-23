import './loggedUser.css'
import photoPlaceholder from '../media/photoPlaceholder.png'

const LoggedUser = ({isAuthenticated}) => {
    return (
        <div id="loggedUserWrapper">
            <div id="loggedUserPhoto">
                {/* <img src={isAuthenticated?isAuthenticated.photo:photoPlaceholder} alt="random user avatar" /> */}
                <img src={photoPlaceholder} alt="random user avatar" />
            </div>
            <div id="loggedUserGreeting">
                {isAuthenticated?"Welcome, " + isAuthenticated.name:"You are not logged in."}
            </div>
        </div>
    )
}

export default LoggedUser