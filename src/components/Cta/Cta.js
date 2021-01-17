import styles from "./Cta.module.scss";

const Cta = () => {
    return (
        <article className={styles.CtaContainer}>
            <a href="https://goiar.com/contact-us/" target="_blank" rel="noreferrer" className={styles.CtaButton}>
                <i className="far fa-comment-dots"></i>
                <span>¿Conversamos?</span>
            </a>
        </article>
    );
};

export default Cta;
