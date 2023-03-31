import React, {useState} from 'react';
import styles from './header.module.css'
import {Link} from 'react-router-dom'
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const quantityCart = useSelector(state => state.product.quantityCart)
    return (
        <>
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
                    <p onClick={() => setIsOpen(!isOpen)} className={styles.icon}>
                        {quantityCart !== 0 && (<span className={styles.quantity}>{quantityCart}</span>)}
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </p>
                </div>
            </div>
        </header>
        {<Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />}
        </>
    );
};

export default Header;