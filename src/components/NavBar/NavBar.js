import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <img src="https://goiar.com/wp-content/uploads/2020/03/Logo_250x60-e1607537605699.png" alt="goiar-logo" />
            {/* <i className={`fas fa-bars ${styles.MenuIcon}`}></i> */}
            <span className={styles.MenuIcon}>&#9776;</span>
            <ul className={styles.Menu}>
                <li className={styles.Option}>Home</li>
                <li className={styles.Option}>
                    Servicios <i className="fas fa-chevron-down"></i>
                </li>
                <li className={styles.Option}>
                    Nosotros
                    <i className="fas fa-chevron-down"></i>
                </li>
                <li className={styles.Option}>Contacto</li>
            </ul>
        </nav>
    );
};

export default NavBar;
