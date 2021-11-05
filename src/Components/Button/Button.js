import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div className="_btn">
            {props.children}
        </div>
    )
}

export default Button
