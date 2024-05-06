import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="content-grid all | min-h-dvh overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className=" full-width content-grid py-5 max-h-[calc(100dvh_-_70px)] overflow-y-scroll">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
