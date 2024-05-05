import cart from  '../../assets/cart.svg'

const Cart = () => {
  return (
    <button className="fixed top-24 end-1">
        <figure className="size-10">
          <img src={cart} alt="" />
        </figure>

        <div className="absolute -top-3 -end-3 | size-8 bg-red-600 p-2 rounded-full grid place-content-center">
          <span>0</span>
        </div>
    </button>
  )
}

export default Cart