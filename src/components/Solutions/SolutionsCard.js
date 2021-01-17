import styles from "./SolutionsCard.module.scss";

const SolutionsCard = ({ imgSrc, title, children }) => {
    return (
        <div data-aos="fade-right" className={styles.SolutionsCard}>
            <img src={imgSrc} alt="fintech" />
            <h2 className={styles.Title}>{title}</h2>
            <p className={styles.Content}>{children}</p>
        </div>
    );
};

export default SolutionsCard;
