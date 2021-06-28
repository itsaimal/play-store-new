import React from 'react'
import "./CustomButton.scss"

function CustomButton({children,favorite,...otherProps}) {
    return (
        <button 

        className={`${favorite ? 'favorite': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
