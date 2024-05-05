type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ name, price, imgUrl }: StoreItemProps) => {
  return (
    <article className="bg-white bg-opacity-50 rounded-md">
      {/* ITEM IMAGE */}
      <figure className="">
        <img src={imgUrl} alt="Item Image" className="h-52 w-full rounded-t-md object-cover" />
      </figure>
      
      {/* ITEM CONTENT */}
      <div className="p-3 grid grid-cols-2">
        <header>
          <h3 className="text-lg font-semibold">{name}</h3>
        </header>

        <p className="justify-self-end">${price}</p>

        <div className="col-span-2 mx-auto">
          Counter
        </div>
      </div>
    </article>
  )
}

export default StoreItem