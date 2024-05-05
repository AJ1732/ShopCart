import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-10'>
      <header>
        <h2 className='text-3xl font-semibold'>Store</h2>
      </header>

      <section className='w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {storeItems.map(({ id }) => (
          <div 
            key={id}
            className='w-full bg-white bg-opacity-55 py-1 px-3 border border-[#1a1a1a] rounded-md'  
          >
            Item
          
          </div>
        ))}
      </section>
    </div>
  )
}

export default Store