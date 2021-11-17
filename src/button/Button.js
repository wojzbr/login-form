import './button.css'

const Button = ({buttonText, onClick, filled=false}) => {
    return (
            <button className={`button ${filled?"buttonFilled":"buttonEmpty"}`} onClick={(e)=>{
                e.preventDefault();
                onClick();
            }}>
                <div className="buttonOverlay">
                    {buttonText}
                </div>
            </button>
    )
}

export default Button;