import cart from  '../../assets/cart.svg'
import { useStoreContext } from '../../context/StoreProvider'

const Cart = () => {
  const { toggleCart, cartQuantity } = useStoreContext();

  return (
    <button onClick={toggleCart} className="fixed top-24 right-5 end-1 text-white">
        <figure className="size-8">
          <img src={cart} alt="" />
        </figure>

        <div className="absolute -top-3 -end-3 | size-8 bg-red-600 p-2 rounded-full grid place-content-center">
          <span>{cartQuantity}</span>
        </div>
    </button>
  )
}

export default Cart