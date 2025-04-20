import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/childhood">Детство</Link>
        </li>
        <li>
          <Link to="/career-start">Начало карьеры</Link>
        </li>
        <li>
          <Link to="/military-ranks">Воинские звания</Link>
        </li>
        <li>
          <Link to="/stellar-time">Звёздное время</Link>
        </li>
        <li>
          <Link to="/korolev-gagarin">Встреча Королёва с Гагариным</Link>
        </li>
        <li>
          <Link to="/first-satellite">Первый искусственный спутник Земли</Link>
        </li>
        <li>
          <Link to="/great-designer">Великий Конструктор</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
