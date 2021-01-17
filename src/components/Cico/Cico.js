import styles from "./Cico.module.scss";
import TextCard from "../Shared/TextCard";
import CicoElement from "./CicoElement";

const Cico = () => {
    return (
        <article className={styles.Cico}>
            <div className={styles.Text}>
                <TextCard title="¿ Qué es CICO ?" tagline="Fintech Factory">
                    CICO es un modelo de arquitectura y patrones de <strong>microservicios</strong> que permite{" "}
                    <strong>escalabilidad</strong> en su construcción y mantenimiento. Su <strong>aceleración</strong>{" "}
                    está dada en sus múltiples integraciones homologadas con proveedores de servicios{" "}
                    <strong>Fintech</strong>, previamente construidas y validadas.
                    <br />
                    El resultado, es el time-to-market mínimo para poder salir a ofrecer funcionalidades{" "}
                    <strong>Fintech</strong> al público.
                </TextCard>
                <div className={styles.Extra}>
                    <CicoElement sign="plus">Aceleración</CicoElement>
                    <CicoElement sign="plus">Escalabilidad</CicoElement>
                    <CicoElement sign="minus">Costo</CicoElement>
                </div>
            </div>
            <div className={styles.Illustration}>
                <img src="https://goiar.com/wp-content/uploads/2020/03/building.png" alt="building" />
            </div>
        </article>
    );
};

export default Cico;
