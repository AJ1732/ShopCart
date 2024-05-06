import { useStoreContext } from '../../context/StoreProvider'
import storeItems from '../../data/items.json'
import { formatCurrency } from '../../utils/formatCurrency'

type cartItemProps = {
  id: number
  quantity: number
}

type cartItem = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const CartItem = ({ id, quantity }: cartItemProps) => {
  const { removeFromCart } = useStoreContext();
  const item = storeItems.find(i => i.id === id);
  const { name, price, imgUrl }:cartItem = item!

  if (item === null) return null;

  return (
    <article className='grid grid-cols-[10rem,_1fr] gap-2'>
      <figure>
        <img src={imgUrl} alt="" className='w-40 h-20 rounded object-cover' />
      </figure>
      <div className='w-full flex justify-between items-center'>
        <div className='h-full'>
          <header>
            <h3 className='font-bold text-xl'>{name}</h3> 
          </header>
          <p className='text-sm font-medium'>
            {formatCurrency(price)}
            {
              quantity > 1 && 
              <span className='text-sm text-[#1F1F1F] font-normal'> x{quantity}</span>
            }
          </p>
          <p className='mt-1 text-lg font-semibold'>{formatCurrency(price * quantity)}</p>
        </div>

        <div className='flex justify-center items-center gap-4'>
          <button onClick={() => removeFromCart(id)} className='bg-[#4b4b4b] bg-opacity-70'>X</button>
        </div>
      </div>
    </article>
  )
}

export default CartItem