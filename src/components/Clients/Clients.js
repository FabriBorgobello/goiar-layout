import styles from "./Clients.module.scss";

const Clients = () => {
    const clientList = [
        { name: "banco-del-sol", img: "https://goiar.com/wp-content/uploads/2020/11/descarga-3.jpg" },
        { name: "xcoop", img: "https://goiar.com/wp-content/uploads/2020/11/xcoop.jpg" },
        { name: "sacde", img: "https://goiar.com/wp-content/uploads/2020/12/unnamed-3.png" },
        { name: "torneos", img: "https://goiar.com/wp-content/uploads/2020/12/torneos.png" },
        { name: "banco-macro", img: "https://goiar.com/wp-content/uploads/2020/12/800px-Logo_Banco_Macro.svg.png" },
        { name: "marval-ofarrel", img: "https://goiar.com/wp-content/uploads/2020/12/1576162666108.jpg" },
        { name: "artear", img: "https://goiar.com/wp-content/uploads/2020/12/Artear_logo.png" },
        { name: "pampa-energia", img: "https://goiar.com/wp-content/uploads/2020/12/archivo_20190821101843_8803.png" },
        { name: "nutrien", img: "https://goiar.com/wp-content/uploads/2020/11/Nutrien-Logo.wine_.png" },
        {
            name: "wudnerman-thompson",
            img: "https://goiar.com/wp-content/uploads/2020/12/1280px-Wunderman_thompson_logo.png",
        },
        { name: "net-pagos", img: "https://goiar.com/wp-content/uploads/2020/11/net-pagos.png" },
    ];

    return (
        <article className={styles.Clients}>
            <h3 className={styles.Tagline}>Nuestros Clientes</h3>
            <h2 className={styles.Title}>Colaboramos con clientes en toda América Latina</h2>
            <div className={styles.Carousel}>
                {clientList.map((client, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            <img src={client.img} alt={client.name} />
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default Clients;
