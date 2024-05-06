import { createPortal } from "react-dom"
import { useStoreContext } from "../../context/StoreProvider"
import CartItem from "./CartItem";

const CartStore = () => {
  const { open, toggleCart, cartItems } = useStoreContext();

  return createPortal(
    <section className={`
      absolute z-[2] top-0 ${open? "right-0": "-right-full"} transition-all duration-500
      w-96 sm:w-[500px] h-full bg-[#EAA93100] bg-[#ccc] pt-24 p-3 shadow-left  
    `}>
      <button onClick={toggleCart} className="absolute right-5 text-white hover:bg-black">Close</button>

      <div className="mt-16 grid gap-4">
        {cartItems.map( item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </section>,
    document.getElementById("portal")!
  )
}

export default CartStore