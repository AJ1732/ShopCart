import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="content-grid all | min-h-dvh">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
