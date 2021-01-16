import IntegrationsCard from "./IntegrationsCard";

const Integrations = () => {
    return (
        <div className="Integrations">
            <div className="Integrations-text">
                <h3 className="Tagline">Integraciones</h3>
                <h2 className="Section-title">Ecosistema de integraciones</h2>
                <div className="Extra">
                    <IntegrationsCard />
                    <IntegrationsCard />
                    <IntegrationsCard />
                    <IntegrationsCard />
                </div>
            </div>
            <div className="Integrations-illustration">
                <img src="https://goiar.com/wp-content/uploads/2019/09/new-image1.png" alt="integration" />
            </div>
        </div>
    );
};

export default Integrations;
