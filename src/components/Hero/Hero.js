import styles from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
    AOS.init();
    return (
        <header className={styles.Hero}>
            <NavBar />
            <article className={styles.Main}>
                <article className={styles.Text} data-aos="zoom-out-right">
                    <h1>
                        Somos una empresa
                        <br />
                        de tecnología especializada en integraciones Fintech
                    </h1>
                    <span>
                        Construimos puentes con integraciones homologadas que permiten la aceleración de los tiempos y
                        costos de implementación.
                    </span>
                </article>
                <div className={styles.Illustration} data-aos="zoom-out-left">
                    <img
                        src="https://goiar.com/wp-content/uploads/2020/01/demo-10-right-image.png"
                        alt="flat-illustration"
                    />
                </div>
            </article>
        </header>
    );
};

export default Hero;
