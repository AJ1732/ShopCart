import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="content-grid all | min-h-dvh">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="content py-5 max-h-[calc(100dvh_-_clamp(1.5rem,_2vw_+_1rem,_2rem))] overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default App
