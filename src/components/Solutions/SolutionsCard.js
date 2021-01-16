import styles from "./SolutionsCard.module.scss";

const SolutionsCard = ({ imgSrc, title, children }) => {
    return (
        <div className={styles.SolutionsCard}>
            <img src={imgSrc} alt="fintech" />
            <h3 className={styles.Title}>{title}</h3>
            <p className={styles.Content}>{children}</p>
        </div>
    );
};

export default SolutionsCard;
