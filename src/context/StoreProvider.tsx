import { PropsWithChildren, createContext, useContext, useState } from "react";

type StoreContextValue = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

type CartItem = {
  id: number
  quantity: number
}

export const StoreContext = createContext({} as StoreContextValue);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [ cartItems, setCartItems ] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find( item => item.id === id )?.quantity || 0
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
    removeFromCart
  }

  return (
    <StoreContext.Provider value={VALUE}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext);
