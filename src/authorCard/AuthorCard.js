import './authorCard.css'
import photoPlaceholder from "../media/photoPlaceholder.png"

const UserCard = () => {
    return (
        <div id="authorCardWrapper">
            <div id="authorPhoto">
                <img src={photoPlaceholder} alt="random user avatar" />
            </div>
            photo<br/>
            name and surname<br/>
            bio<br/>
            joined
        </div>
    )
}

export default UserCard