import styles from "./TextCard.module.scss";
const TextCard = ({ children, title, tagline }) => {
    return (
        <div className={styles.TextCard}>
            <h3 className={styles.Tagline}>{tagline}</h3>
            <h2 className={styles.Title}>{title}</h2>
            <p className={styles.Content}>{children}</p>
        </div>
    );
};

export default TextCard;
