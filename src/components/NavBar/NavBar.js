import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <img src="http://goiar.com/wp-content/uploads/2020/03/Logo_250x60-e1607537605699.png" alt="goiar-logo" />
            <i className={`fas fa-bars ${styles.MenuIcon}`}></i>
            <ul className={styles.Menu}>
                <li className={styles.Option}>
                    <a href="https://www.google.com.ar" className="option-link">
                        Home
                    </a>
                </li>
                <li className={styles.Option}>
                    <a href="https://www.google.com.ar" className="option-link">
                        Servicios <i className="fas fa-chevron-down"></i>
                    </a>
                </li>
                <li className={styles.Option}>
                    <a href="https://www.google.com.ar" className="option-link">
                        Nosotros
                    </a>
                    <i className="fas fa-chevron-down"></i>
                </li>
                <li className={styles.Option}>
                    <a href="https://www.google.com.ar" className="option-link">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
