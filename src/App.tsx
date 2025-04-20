import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import styles from "./App.module.scss"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

const App = () => {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <main className={styles.content}>
        <Sidebar />
        <div className={styles.container}>
          <Outlet /> {/* Здесь будут отображаться страницы */}
        </div>
      </main>
    </div>
  )
}

export default App
