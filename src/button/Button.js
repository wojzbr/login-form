import './button.css'
import { BrowserRouter as Router, Link } from "react-router-dom"

const Button = ({buttonText, link, filled=false}) => {
    return (
                <Link className={`button ${filled?"buttonFilled":"buttonEmpty"}`} to={link} onClick={()=>{
                    if (document.getElementById("buttonsWrapper").style.right==="0px") document.getElementById("buttonsWrapper").style.right="-70vw"
                }}>
                    <div className="buttonOverlay">
                        {buttonText}
                    </div>
                </Link>
    )
}

export default Button;