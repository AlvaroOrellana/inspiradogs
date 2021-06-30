import React from "react";
import header from "@Assets/header.jpg";
import { CustomHeader } from "@StyledComponents"

export default function Header() {
    return (
        <header className="Header">
            <CustomHeader src={header} alt="header" className="Logo" />
        </header>
    )
}

