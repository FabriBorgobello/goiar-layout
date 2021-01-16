import "./style/reset.css";
import "./App.css";

export default function App() {
    return (
        <div className="Container">
            <div className="NavBar">
                <img src="http://goiar.com/wp-content/uploads/2020/11/Logo_100x24.png" alt="goiar-logo" />
                <ul className="Menu">
                    <li className="option">
                        <a href="https://www.google.com.ar" className="option-link">
                            Home
                        </a>
                    </li>
                    <li className="option">
                        <a href="https://www.google.com.ar" className="option-link">
                            Servicios
                        </a>
                    </li>
                    <li className="option">
                        <a href="https://www.google.com.ar" className="option-link">
                            Nosotros
                        </a>
                    </li>
                    <li className="option">
                        <a href="https://www.google.com.ar" className="option-link">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
            <div className="Hero">
                <div className="Hero-text">
                    <h1 className="Title">Somos una empresa de tecnología especializada en integraciones Fintech</h1>
                    <h2>
                        Construimos puentes con integraciones homologadas que permiten la aceleración de los tiempos y
                        costos de implementación.
                    </h2>
                </div>
                <div className="Hero-illustration">
                    <img
                        src="https://goiar.com/wp-content/uploads/2020/01/demo-10-right-image.png"
                        alt="flat-illustration"
                    />
                </div>
            </div>
            <div className="Solutions">
                <div className="Solutions-illustration">
                    <div className="Solutions-card">
                        <img src="https://goiar.com/wp-content/uploads/2019/09/seven-img1.png" alt="fintech" />
                        <h3 className="Card-title">Aceleradores Fintech</h3>
                        <p className="Card-content">KYC - Payments - CashIn - CashOut - Open Banking</p>
                    </div>
                    <div className="Solutions-card">
                        <img src="https://goiar.com/wp-content/uploads/2019/09/seven-img2.png" alt="cico" />
                        <h3 className="Card-title">CICO</h3>
                        <p className="Card-content">
                            Plataforma centralizada de API's, Log de transacciones, trazabilidad, Seguridad.
                        </p>
                    </div>
                    <div className="Solutions-card">
                        <img src="https://goiar.com/wp-content/uploads/2019/09/seven-img3.png" alt="squad-agile" />
                        <h3 className="Card-title">Squad Agile</h3>
                        <p className="Card-content">
                            Dedicated Teams especializados en el desarrollo de integraciones Fintech
                        </p>
                    </div>
                </div>
                <div className="Solutions-text">
                    <h3 className="Tagline">Construcción de Soluciones</h3>
                    <h2 className="Section-title">Conectar, conectar y conectar</h2>
                    <p className="Content">
                        Basamos nuestras integraciones en modelos de conexión estándares, brindando aceleradores de
                        negocio contra los principales proveedores de servicios Fintech y otros ecosistemas. Creemos que
                        la diversidad de soluciones que existen hoy en día necesitan mayores puentes de enlaces entre sí
                        para poder funcionar como una solución integral real.
                    </p>
                </div>
            </div>
            <div className="Cico">
                <div className="Cico-text">
                    <h3 className="Tagline">Fintech Factory</h3>
                    <h2 className="Section-title">¿ Qué es CICO ?</h2>
                    <p className="Content">
                        CICO es un modelo de arquitectura y patrones de <strong>microservicios</strong> que permite
                        <strong>escalabilidad</strong> en su construcción y mantenimiento. Su{" "}
                        <strong>aceleración</strong> está dada en sus múltiples integraciones homologadas con
                        proveedores de servicios <strong>Fintech</strong>, previamente construidas y validadas. El
                        resultado, es el time-to-market mínimo para poder salir a ofrecer funcionalidades
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
            <div className="Integrations">
                <div className="Integrations-text">
                    <h3 className="Tagline">Fintech Factory</h3>
                    <h2 className="Section-title">¿ Qué es CICO ?</h2>
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
                <div className="Integrations-illustration">
                    <img src="https://goiar.com/wp-content/uploads/2019/09/new-image1.png" alt="integration" />
                </div>
            </div>
            <div className="CTA">
                <button>¿Conversamos?</button>
            </div>
            <div className="Clients">
                <h3 className="Tagline-center">Nuestros Clientes</h3>
                <h2 className="Section-title-center">Colaboramos con clientes en toda América Latina</h2>
                <div className="Clients-carousel">
                    <img src="https://goiar.com/wp-content/uploads/2020/11/descarga-3.jpg" alt="client" />
                    <img src="https://goiar.com/wp-content/uploads/2020/11/xcoop.jpg" alt="client" />
                    <img src="https://goiar.com/wp-content/uploads/2020/12/unnamed-3.png" alt="client" />
                </div>
            </div>
            <div className="Footer">
                <div className="Footer-section">
                    <p>Av de Mayo 749</p>
                    <p>Buenos Aires - Argentina</p>
                </div>
                <div className="Footer-section">
                    <p>Teléfono: +54 (11) 5217 7730</p>
                    <p>Email: info@goiar.com</p>
                </div>
                <div className="Footer-section">
                    <p>Powered by © Goiar S.A.S - 2020 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
