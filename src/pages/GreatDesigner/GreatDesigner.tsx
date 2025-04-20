import styles from "./GreatDesigner.module.scss"
import mainLast from "../../assets/GreatDesigner/mainLast.jpg"

const GreatDesigner = () => {
  return (
    <div className={styles.childhood}>
      <div className={styles.header}>
        <h1>Великий Конструктор</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.imageContainer}>
            <img
              src={mainLast}
              alt="Великий Конструктор"
              className={styles.image}
            />
          </div>
          <div className={styles.imageCaption}>
            Мир узнал имя человека, ставшего основателем практической
            космонавтики, открывшего эру освоения человеком космоса,
            обеспечившего ракетно-ядерный стратегический паритет СССР и
            сделавший Советский Союз самой передовой ракетно-космической
            державой только после его кончины 14 января 1966 года. Смерть
            последовала на его 60-м году жизни от целого комплекса заболеваний,
            непосредственной причиной гибели стала острая сердечная
            недостаточность.
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreatDesigner
