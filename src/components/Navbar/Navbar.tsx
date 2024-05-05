import { NavLink } from "react-router-dom"
import cart from  '../../assets/cart.svg'

const Navbar = () => {
  return (
    <nav className="full-width content-grid | bg-[#1a1a1a] text-white drop-shadow-2xl">
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

      <button className="fixed top-20 end-1">
        <figure className="size-10">
          <img src={cart} alt="" />
        </figure>
      </button>
    </nav>
  )
}

export default Navbar