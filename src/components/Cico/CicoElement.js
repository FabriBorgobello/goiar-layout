import styles from "./CicoElement.module.scss";

const CicoElement = ({ children, sign = "plus" }) => {
    return (
        <div className={styles.Element}>
            <span className={styles.Sign}>{sign === "plus" ? "+" : "-"}</span>
            <h3 className={styles.Tag}>{children}</h3>
        </div>
    );
};

export default CicoElement;
