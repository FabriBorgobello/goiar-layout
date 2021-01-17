import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Top}>
                <div className={styles.Adress}>
                    <p>Av de Mayo 749</p>
                    <p>Buenos Aires - Argentina</p>
                </div>
                <div className={styles.Contact}>
                    <p>Teléfono: +54 (11) 5217 7730</p>
                    <p>Email: info@goiar.com</p>
                </div>
            </div>
            <div className={styles.Bottom}>
                <p>ESTA NO ES LA WEB OFICIAL DE GOIAR. ES UN PROYECTO CON FINES EXCLUSIVAMENTE ACADÉMICOS</p>
            </div>
        </div>
    );
};

export default Footer;
