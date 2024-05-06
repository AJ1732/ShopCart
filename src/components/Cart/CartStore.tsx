import { createPortal } from "react-dom"
import { useStoreContext } from "../../context/StoreProvider"

const CartStore = () => {
  const { open } = useStoreContext();

  if (!open) {
    return null
  }

  return createPortal(
    <div className="absolute top-0 right-0 w-32 h-full bg-red-500">
      CartStore
    </div>,
    document.getElementById("portal")!
  )
}

export default CartStore