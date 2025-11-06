import React from "react";
// this button will be reusable primary button. It will have default styles but can be extended with props later.
const Button = ({ text }) => {
    return <button className="btn-primary w-fit">{text}</button>;
};

export default Button;
