import React from 'react';
import styles from './header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
    
    return (
        <header>
            <div className={styles.wrapper} >
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/catalog" className={styles.link}>Shop</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                    <Link to="/contact" className={styles.link}>Contact</Link>
                </nav>
                <div className={styles.icons}>
                    <Link to="/account" className={styles.icon}>
                        <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                    </Link>
                    <p className={styles.icon}>
                        <img src="/images/search-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;