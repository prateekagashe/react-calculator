import React from 'react'

const CustomButton = props => {
    const{className, name, handler} = props
    return (
        <button className={className} onClick={handler}>{name}</button>
    )
}

export default CustomButton