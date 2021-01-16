import "./App.scss";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Solutions/Solutions";
import Cico from "./components/Cico/Cico";
import Integrations from "./components/Integrations/Integrations";
import Clients from "./components/Clients/Clients";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div className="Container">
            <Hero />
            <Solutions />
            <Cico />
            <Integrations />
            <Cta />
            <Clients />
            <Footer />
        </div>
    );
}
