import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { FaHome } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <NavLink to="/" className={styles.Nav__Logo}>
                <h1>OPUS-INVENIRE v.2</h1>
            </NavLink>
            <NavLink to="/" className={styles.Nav__ReturnHome}>
                <h1>
                    <FaHome />
                </h1>
            </NavLink>
        </nav>
    );
};

export default Nav;
