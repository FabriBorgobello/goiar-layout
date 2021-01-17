import TextCard from "../Shared/TextCard";
import SolutionsCard from "./SolutionsCard";
import styles from "./Solutions.module.scss";

const Solutions = () => {
    return (
        <article className={styles.Solutions}>
            <div className={styles.Illustration}>
                <div className={styles.First}>
                    <SolutionsCard
                        title="Aceleradores Fintech"
                        imgSrc="https://goiar.com/wp-content/uploads/2019/09/seven-img1.png"
                    >
                        KYC - Payments - CashIn - CashOut - Open Banking
                    </SolutionsCard>
                </div>
                <div className={styles.Second}>
                    <SolutionsCard
                        title="Squad Agile"
                        imgSrc="https://goiar.com/wp-content/uploads/2019/09/seven-img3.png"
                    >
                        KYC - Payments - CashIn - CashOut - Open Banking
                    </SolutionsCard>
                </div>
                <div className={styles.Third}>
                    <SolutionsCard title="CICO" imgSrc="https://goiar.com/wp-content/uploads/2019/09/seven-img2.png">
                        KYC - Payments - CashIn - CashOut - Open Banking
                    </SolutionsCard>
                </div>
            </div>
            <div className={styles.Text}>
                <TextCard title="Conectar, conectar y conectar" tagline="Construcción de Soluciones">
                    Basamos nuestras integraciones en modelos de conexión estándares, brindando aceleradores de negocio
                    contra los principales proveedores de servicios Fintech y otros ecosistemas.
                    <br /> Creemos que la diversidad de soluciones que existen hoy en día necesitan mayores puentes de
                    enlaces entre sí para poder funcionar como una solución integral real.
                </TextCard>
            </div>
        </article>
    );
};

export default Solutions;
