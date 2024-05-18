import React from "react";
// text, onclick, color, size
const ButtonBase = (props) => {
    const {text, onClick, color, size} = props;
    return (
        <button onClick={onClick} className={`custom-bottom ${color} ${size}`}>{text}
        </button>
    )
}
export default ButtonBase;