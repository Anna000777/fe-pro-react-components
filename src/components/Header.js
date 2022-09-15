import React from 'react';
import NavItem from "./NavItem";
import { navItems } from "../../constants/navItems";

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <a href="src/components/Header" className="logo">
                    My logo
                </a>

                <nav>
                    <ul className="nav-list">
                        {navItems.map(({link, text, id}) => {
                            return (
                                <NavItem key={id} link={link} text={text} />
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;