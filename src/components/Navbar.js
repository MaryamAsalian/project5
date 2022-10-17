import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                ChatMax
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
                logout
            </div>
            
        </div>
    );
};

export default Navbar;