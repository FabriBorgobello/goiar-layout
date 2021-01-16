import styles from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <NavBar />
            <div className={styles.Main}>
                <div className={styles.Text}>
                    <h1>
                        Somos una empresa
                        <br />
                        de tecnología especializada en integraciones Fintech
                    </h1>
                    <span>
                        Construimos puentes con integraciones homologadas que permiten la aceleración de los tiempos y
                        costos de implementación.
                    </span>
                </div>
                <div className={styles.Illustration}>
                    <img
                        src="https://goiar.com/wp-content/uploads/2020/01/demo-10-right-image.png"
                        alt="flat-illustration"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
