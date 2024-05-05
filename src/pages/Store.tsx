import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-10'>
      <header>
        <h2 className='text-3xl font-semibold'>Store</h2>
      </header>

      <section className='w-4/5 mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {storeItems.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </section>
    </div>
  )
}

export default Store