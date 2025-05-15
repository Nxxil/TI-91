import styles from '@/app/styles/page.module.css'
import Header from "./components/header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <img src="/imgC1.jpg" alt="" />
        <div className={styles.bannerText}>
          <h1>Bienvenido</h1>
          <p>Encuentra los mejores autos</p>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/imgC1.jpg" className={styles.containerImg} />
        <h2>LAWRENCE MOTORS</h2>
        <p>Lawrence Motors es una empresa dedicada a la compra y venta de autos usados. Contamos con una amplia variedad de vehículos de diferentes marcas y modelos, todos en excelentes condiciones y a precios competitivos.</p>
      </div>
      <div className={styles.container}>
        <h2>INFO INFO INFO</h2>
        <div className={styles.containerGrid}>
          <div >
            <img src="/imgC1.jpg" className={styles.containerImgGrid}/>
            <p  className={styles.p}>Compacto</p>
          </div>
          <div>
            <img src="/imgC1.jpg" className={styles.containerImgGrid} />
            <p className={styles.p}>SUV </p>
          </div>
          <div>
            <img src="/imgC1.jpg" className={styles.containerImgGrid} />
            <p className={styles.p}>Deportivo</p>
          </div>
        </div> 
      </div>
    </div>
  );
}
