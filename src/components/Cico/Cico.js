const Cico = () => {
    return (
        <div className="Cico">
            <div className="Cico-text">
                <h3 className="Tagline">Fintech Factory</h3>
                <h2 className="Section-title">¿ Qué es CICO ?</h2>
                <p className="Content">
                    CICO es un modelo de arquitectura y patrones de <strong>microservicios</strong> que permite
                    <strong>escalabilidad</strong> en su construcción y mantenimiento. Su <strong>aceleración</strong>{" "}
                    está dada en sus múltiples integraciones homologadas con proveedores de servicios{" "}
                    <strong>Fintech</strong>, previamente construidas y validadas. El resultado, es el time-to-market
                    mínimo para poder salir a ofrecer funcionalidades
                    <strong>Fintech</strong> al público.
                </p>
                <div className="Extra">
                    <div className="Extra-element">
                        <div>+</div>
                        <p>Aceleración</p>
                    </div>
                    <div className="Extra-element">
                        <div>+</div>
                        <p>Escalabilidad</p>
                    </div>
                    <div className="Extra-element">
                        <div>-</div>
                        <p>Costo</p>
                    </div>
                </div>
            </div>
            <div className="Cico-illustration">
                <img src="https://goiar.com/wp-content/uploads/2020/03/building.png" alt="building" />
            </div>
        </div>
    );
};

export default Cico;
