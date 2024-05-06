import { PropsWithChildren, createContext, useContext, useState } from "react";

type StoreContextValue = {
  toggleCart: () => void
  // closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
  open: boolean
}

type CartItem = {
  id: number
  quantity: number
}

export const StoreContext = createContext({} as StoreContextValue);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [ open, setOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState<CartItem[]>([]);

  const toggleCart = () => setOpen(!open)
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  
  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map( item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity++ }
          } else {
            return item
          }
        })
      }
    })
  }
 
  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map( item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity-- }
          } else {
            return item
          }
        })
      }
    })
  }
  
  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  const VALUE = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    toggleCart,
    cartItems,
    cartQuantity,
    open
  }

  return (
    <StoreContext.Provider value={VALUE}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext);
