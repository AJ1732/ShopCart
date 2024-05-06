import Cart from '../components/Cart/Cart'
import CartStore from '../components/Cart/CartStore'
import StoreItem from '../components/StoreItem'
import { useStoreContext } from '../context/StoreProvider'
import storeItems from '../data/items.json'

const Store = () => {
  const { open, toggleCart } = useStoreContext();
  return (
    <div className='flex flex-col justify-start items-start gap-10'>
      {/* MODAL BG OVERLAY */}
      <div onClick={toggleCart} className={`absolute z-[1] ${open? "w-full inset-0": "w-0 left-full"} bg-[#EAA931] bg-opacity-50 transition-all origin-right duration-300`}></div>

      <header>
        <h2 className='text-3xl font-semibold'>Store</h2>
      </header>

       {/* CART ICON */}
       <Cart />

      <section className='w-4/5 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {storeItems.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </section>

      <CartStore />
    </div>
  )
}

export default Store