import IntegrationsCard from "./IntegrationsCard";
import styles from "./Integrations.module.scss";

const Integrations = () => {
    return (
        <div className={styles.Integration}>
            <div className={styles.Text}>
                <h3 className={styles.Tagline}>Integraciones</h3>
                <h2 className={styles.Title}>Ecosistema de integraciones</h2>
                <div className={styles.Extra}>
                    <div className={styles.First}>
                        <IntegrationsCard title="OnBoarding">
                            Prueba de vida, cruce de datos, validación de identidad
                        </IntegrationsCard>
                    </div>
                    <div className={styles.Second}>
                        <IntegrationsCard title="Bank Account">
                            Cuentas bancarias, CVU, transferencias, consultas, pagos
                        </IntegrationsCard>
                    </div>
                    <div className={styles.Third}>
                        <IntegrationsCard title="CashIn - CashOut">Carga de dinero, retiro de dinero </IntegrationsCard>
                    </div>
                    <div className={styles.Fourth}>
                        <IntegrationsCard title="Payment">Pagos via QR, interfaz comercios</IntegrationsCard>
                    </div>
                    <div className={styles.Fifth}>
                        <IntegrationsCard title="Transfer">
                            Transferencias domesticas e internacionales
                        </IntegrationsCard>
                    </div>
                </div>
            </div>
            <div className={styles.Illustration}>
                <img src="https://goiar.com/wp-content/uploads/2019/09/new-image1.png" alt="integration" />
            </div>
        </div>
    );
};

export default Integrations;
