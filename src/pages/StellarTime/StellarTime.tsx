import styles from "./StellarTime.module.scss"
import keldish from "../../assets/StellarTime/keldish.jpg"

const StellarTime = () => {
  return (
    <div className={styles.childhood}>
      <div className={styles.header}>
        <h1>Звёздное время</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <p>
            Звёздное время С.П. Королёва наступило после окончания Второй
            мировой войны, когда после разбора трофеев и мы, и союзники
            осознали, насколько далеко продвинулись немцы в совершенствовании
            своей ракетной техники. Американцам досталось много больше: сами
            «изделия» ФАУ-2, полные комплекты для их сборки, чертежи и готовый
            коллектив во главе с Вернером фон Брауном. Нам – его сотрудники
            второго ряда, разрозненные листы чертежей, отдельные узлы и
            механизмы.
          </p>
          <div className={styles.imageContainer}>
            <img
              src={keldish}
              alt="И.В. Курчатов и С.П. Королёв"
              className={styles.image}
            />
            <div className={styles.imageCaption}>
              Они родились в один день, 12 января, хотя и с разницей в несколько
              лет: «отец» советской атомной бомбы И.В. Курчатов (в центре), он
              на 4 года старше, и создатель средства доставки её в любую точку
              мира, С.П. Королёв. Справа – Президент Академии наук СССР М.В.
              Келдыш.
            </div>
          </div>
          <p>
            Но даже если бы Королёву положили на стол полный комплект чертежей,
            мало помогло бы: две трети наименований пластмасс, резин и металлов
            из конструкции ФАУ-1 в СССР не производилось. Материалы с заданными
            параметрами пришлось бы создавать заново. Поэтому стороны пошли
            разными путями: американцы копировали немецкие ракеты, мало-помалу
            совершенствуя их. Королёв, отталкиваясь от германских образцов,
            создавал свои. Весьма успешно: его первая ракета Р-1, впервые
            взлетев 10 октября 1948 года, 28 ноября 1950 года была принята на
            вооружение. Представляла собой чудо минимализма: если в немецкой
            ракете использовалось 87 марок и сортаментов стали и 59 – цветных
            металлов, в Р-1 – 32 и 21 соответственно. При этом она была надёжней
            своей «прародительницы», и летала дальше неё.
          </p>
          <p>
            Истинным шедевром Королёва стала ракета Р-7, знаменитая «семёрка»,
            испытания которой проходили с 15 мая 1957 года. В качестве «теста»
            (испытания «семёрки» продолжались до ноября 1959-го, а её
            модификации – Р-7А – и вовсе до июля 1960-го) ракета Р-7 вывела 4
            октября 1957 года первый в мире искусственный спутник Земли. Событие
            оказалось столь ошеломительным, сколь и нежданным: американцы давно
            анонсировали «вот-вот» запуск своего сателлита, и вдруг – как гром
            среди ясного неба!
          </p>
        </div>
      </div>
    </div>
  )
}

export default StellarTime
