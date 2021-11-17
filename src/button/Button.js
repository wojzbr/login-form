import './button.css'
import { BrowserRouter as Router, Link } from "react-router-dom"

const Button = ({buttonText, link, filled=false}) => {
    return (
                <Link className={`button ${filled?"buttonFilled":"buttonEmpty"}`} to={link} >
                    <div className="buttonOverlay">
                        {buttonText}
                    </div>
                </Link>
    )
}

export default Button;