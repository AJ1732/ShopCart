import { createPortal } from "react-dom"
import { useStoreContext } from "../../context/StoreProvider"

const CartStore = () => {
  const { open, toggleCart } = useStoreContext();

  if (!open) {
    return null
  }

  return createPortal(
    <div className="absolute bottom-0 right-0 w-80 h-[calc(100dvh_-_69px)]
     bg-red-500 p-4">
      <button onClick={toggleCart} className="text-white"> X </button>
      CartStore
    </div>,
    document.getElementById("portal")!
  )
}

export default CartStore