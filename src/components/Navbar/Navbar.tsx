const Navbar = () => {
  return (
    <nav className="full-width content-grid | bg-[#353535] text-white drop-shadow-2xl">
      <div className="flex justify-between items-center">
        <header>
          <h1 className="text-[clamp(1.5rem,_2vw_+_1rem,_2rem)]">Logo</h1>
        </header>
        
        <ul className="text-xl | flex basis-40 justify-between items-center gap-2">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar