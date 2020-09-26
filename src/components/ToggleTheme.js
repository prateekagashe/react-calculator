import React from "react";
import CustomButton from "./Button";

const ToggleTheme = (props) => {
    const { className, name, handler } = props;
    return <CustomButton className={className} name={name} handler={handler} />

};

export default ToggleTheme;
