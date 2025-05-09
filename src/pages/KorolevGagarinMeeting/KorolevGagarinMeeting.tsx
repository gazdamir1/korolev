import styles from "./KorolevGagarinMeeting.module.scss"
import gagarin from "../../assets/KorolevGagarinMeeting/gagarin.jpg"
import secondWife from "../../assets/KorolevGagarinMeeting/secondWife.png"

const KorolevGagarinMeeting = () => {
  return (
    <div className={styles.childhood}>
      <div className={styles.header}>
        <h1>Встреча Королёва с Гагариным</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.imageContainer}>
            <img
              src={gagarin}
              alt="С.П. Королёв и первый космонавт планеты Земля Ю.А. Гагарин"
              className={styles.image}
            />
            <div className={styles.imageCaption}>
              С.П. Королёв и первый космонавт планеты Земля Ю.А. Гагарин
            </div>
          </div>
          <p>
            Американские журналисты объявили эту дату «космическим Пёрл-Харбором
            Америки». Не знали только одного: кто тот русский «адмирал», что
            смог нанести столь разрушительный удар по престижу США? И дальнейшие
            события: запуск аппарата с живым существом – собакой Лайкой на
            борту, сверхтяжёлого спутника массой 1327 килограммов, доставка
            вымпела с гербом СССР на Луну, фотографирование её обратной стороны,
            первый пилотируемый полёт Юрия Гагарина на уже усовершенствованной
            Р-7А, в корабле «Восток-1», отправка в космос целой флотилии
            одноместных «Востоков», а потом многоместных «Восходов» – только
            распаляли мировое воображение. Кто он, этот русский Вернер фон
            Браун? Скажите фамилию, и Нобелевская премия для гения,
            распахнувшего человечеству дверь в космос, будет гарантирована!{" "}
          </p>
          <div className={styles.imageContainer}>
            <img
              src={secondWife}
              alt="С.П. Королёв со своей второй женой "
              className={styles.image}
            />
            <div className={styles.imageCaption}>
              С.П. Королёв со своей второй женой – Ниной Ивановной Королёвой
              (урождённой Котенковой). Она была его музой все последние годы
              жизни
            </div>
          </div>
          <p>
            И лишь тогда, после смерти, стал понятен масштаб его фигуры. В своём
            лице Королёв, как оказалось, объединял усилия сотен коллективов,
            работавших ради единой цели, и тысяч отдельных специалистов. Он один
            был способен синхронизировать этот чудовищно огромный живой
            механизм, именуемый иногда «космической империей Королёва».
          </p>
          <p>
            Гибель Королёва привела к сворачиванию – на время или навсегда –
            целого ряда космических программ СССР: испытаний сверхтяжёлого
            носителя Н-1, пилотируемого Лунного проекта, проекта освоения Марса,
            проекта орбитальной станции… Проживи он дольше, человечеству
            открылись бы имена советских покорителей спутника Земли «красной
            планеты», а мир был бы совсем не таким, каким он есть сегодня? Как
            знать…
          </p>
        </div>
      </div>
    </div>
  )
}

export default KorolevGagarinMeeting
