import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="full-width content-grid z-10 | bg-[#1a1a1a] text-white drop-shadow-2xl">
      {/* NAVBAR CONTENT */}
      <div className="flex justify-between items-center">
        <header>
          <h1 className="text-[clamp(1.5rem,_2vw_+_1rem,_2rem)]">Logo</h1>
        </header>
        
        <ul className="font-semibold text-xl | flex basis-40 justify-between items-center gap-2">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/store`}>Store</NavLink>
          <NavLink to={`/about`}>About</NavLink>
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar