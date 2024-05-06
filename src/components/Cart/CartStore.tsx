import { createPortal } from "react-dom"
import { useStoreContext } from "../../context/StoreProvider"

const CartStore = () => {
  const { open, toggleCart } = useStoreContext();

  // if (!open) {
  //   return null
  // }

  return createPortal(
    <section className={`absolute z-[2] top-0 ${open? "right-0": "-right-full"} transition-all duration-500
     w-80 h-full bg-[#EAA93100] bg-[#ccc] pt-24 p-4 shadow-left`}>
      <button onClick={toggleCart} className="absolute right-5 text-white hover:bg-black"> X </button>

      <div>
        CartStore
      </div>
    </section>,
    document.getElementById("portal")!
  )
}

export default CartStore