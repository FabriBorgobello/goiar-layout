import styles from "./IntegrationsCard.module.scss";

const IntegrationsCard = ({ title, children }) => {
    return (
        <div className={styles.IntegrationsCard} data-aos="fade-right">
            <div className={styles.Icon}>
                <span>✔</span>
            </div>
            <div className={styles.Content}>
                <h3 className={styles.Title}>{title}</h3>
                <p className={styles.Text}>{children}</p>
            </div>
        </div>
    );
};

export default IntegrationsCard;
