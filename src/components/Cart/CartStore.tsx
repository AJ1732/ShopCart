import { createPortal } from "react-dom"
import { useStoreContext } from "../../context/StoreProvider"

const CartStore = () => {
  const { open, toggleCart } = useStoreContext();

  // if (!open) {
  //   return null
  // }

  return createPortal(
    <div className={`absolute top-0 ${open? "right-0": "-right-full"} transition-all duration-500
     w-80 h-full bg-[#EAA931] pt-24 p-4 shadow-left`}>
      <button onClick={toggleCart} className="absolute right-5 text-white hover:bg-black"> X </button>
      CartStore
    </div>,
    document.getElementById("portal")!
  )
}

export default CartStore