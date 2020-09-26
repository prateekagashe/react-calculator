import React from 'react'

const CustomInput = props => {
    const{className, inputValue, inputDisabled} = props
    return (
        <input disabled={inputDisabled} className={className} value={inputValue}/>
    )
}

export default CustomInput