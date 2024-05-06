import { useStoreContext } from "../context/StoreProvider"
import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useStoreContext();
  const quantity = getItemQuantity(id);

  return (
    <article className="bg-white bg-opacity-50 rounded-md">
      {/* ITEM IMAGE */}
      <figure className="">
        <img src={imgUrl} alt="Item Image" className="h-52 w-full rounded-t-md object-cover" />
      </figure>
      
      {/* ITEM CONTENT */}
      <div className="p-3 pb-8 grid grid-cols-2 gap-4">
        <header>
          <h3 className="text-lg font-semibold">{name}</h3>
        </header>

        <p className="justify-self-end">{formatCurrency(price)}</p>

        <div className="col-span-2 w-full mt-auto mx-auto text-white text-center">
          {
            quantity === 0? 
            // 0? 
            <button 
              onClick={() => increaseCartQuantity(id)}
              className="w-full rounded active:bg-[#1A1A1A] focus-within:outline-none"
            >+ Add To Cart</button> 
            : 
            <div className="grid place-content-center gap-2">
              <div className="flex justify-center items-center gap-3">
                <button onClick={() => decreaseCartQuantity(id)} className="w-16 font-bold">-</button>
                <p className="font-medium text-xl text-[#1A1A1A]">
                  <span>{quantity}</span> in cart
                </p>
                <button onClick={() => increaseCartQuantity(id)} className="w-16 font-bold">+</button>
              </div>
              <button onClick={() => removeFromCart(id)} className="bg-red-500 hover:bg-red-600">Remove</button>
            </div>
          }
        </div>
      </div>
    </article>
  )
}

export default StoreItem