import styles from "./TopCta.module.scss";

const TopCta = () => {
    return (
        <article className={styles.TopCtaContainer}>
            <a href="https://goiar.com/contact-us/" target="_blank" rel="noreferrer" className={styles.TopCtaButton}>
                <i className="far fa-paper-plane"></i> <span>Contacto GOIAR</span>
            </a>
        </article>
    );
};

export default TopCta;
