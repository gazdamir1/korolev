import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home/Home"
import Childhood from "./pages/Childhood/Childhood"
import CareerStart from "./pages/CareerStart/CareerStart"
import MilitaryRanks from "./pages/MilitaryRanks/MilitaryRanks"
import StellarTime from "./pages/StellarTime/StellarTime"
import KorolevGagarinMeeting from "./pages/KorolevGagarinMeeting/KorolevGagarinMeeting"
import FirstSatellite from "./pages/FirstSatellite/FirstSatellite"
import GreatDesigner from "./pages/GreatDesigner/GreatDesigner"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "childhood", element: <Childhood /> },
      { path: "career-start", element: <CareerStart /> },
      { path: "military-ranks", element: <MilitaryRanks /> },
      { path: "stellar-time", element: <StellarTime /> },
      { path: "korolev-gagarin", element: <KorolevGagarinMeeting /> },
      { path: "first-satellite", element: <FirstSatellite /> },
      { path: "great-designer", element: <GreatDesigner /> },
    ],
  },
])
