import styles from '@/app/styles/page.module.css'
export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <video src="/video.mp4" autoPlay={true} controls={true} loop={true} width="100%" height="auto">
        </video>
        <div className={styles.bannerText}>
          <h1>Bienvenido</h1>
          <p>Encuentra los mejores autos</p>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.h2}>LAWRENCE MOTORS</h2>
        <p className={styles.pContainer}>Lawrence Motors es una empresa dedicada a la compra y venta de autos usados. Contamos con una amplia variedad de vehículos de diferentes marcas y modelos, todos en excelentes condiciones y a precios competitivos.</p> 
        <img src="/banner.png" className={styles.containerImg} />
      </div>
      <div className={styles.grid}>
        <p className={styles.p}>Nos enorgullece ofrecer un servicio de calidad, atención personalizada y vehículos cuidadosamente seleccionados para garantizar tu satisfacción.</p>
        <div className={styles.containerGrid}>
          <div  className={styles.containerInfo}>
            <img src="/grid/g1.png" className={styles.containerImgGrid}/>
            <a href=""><p  className={styles.p}>Autos Verificados</p></a>
          </div>
          <div className={styles.containerInfo}>
            <img src="/grid/g2.png" className={styles.containerImgGrid} />
            <a href=""><p  className={styles.p}>Revisados Por Expertos</p></a>
          </div>
          <div className={styles.containerInfo}>
            <img src="/grid/g3.png" className={styles.containerImgGrid} />
            <a href=""><p  className={styles.p}>Seguro Incluido</p></a>
          </div>
        </div> 
      </div>
    </div>
  );
}
