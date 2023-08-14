import 'components/App/styles.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Cart from 'components/Pages/Cart';
import HomePage from 'components/Pages/HomePage';
import Restaurant from 'components/Pages/Restaurant';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export type DishesType = {
  name: string
  image: string
  description: string  
  id: number
  price: number
  restaurantId: number  
}

export type CartItemtype = {
  id: string;
  foodItemId: number;
  quantity: number;
  name: string,
  description: string,
  price: number,
  image: string
}

function App() {

  const [cartItems, setCartItems] = useState<CartItemtype[]>(
    // JSON.parse(localStorage.getItem('items')!)
    []
  )
  console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems))
  }, [cartItems])

  const addNewItemInCart = (cartItem:CartItemtype) => {
    const newItems = [...cartItems, cartItem]
    setCartItems(newItems)
}

  const deleteNewItemCart = (cartItem:CartItemtype) => {
    const newItems = cartItems.filter(i => i.id !== cartItem.id)
    setCartItems(newItems)
  }

  const updateNewItemCart = (cartItem:CartItemtype) => {
    const newItems = cartItems.filter(i => i.id !== cartItem.id)
    setCartItems([...newItems, cartItem])
  }

  const [dishes, setDishes] = useState<DishesType[]>([])

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:slug" element={
            <Restaurant 
              cartItems={cartItems} 
              addNewItemInCart={addNewItemInCart} 
              deleteNewItemCart={deleteNewItemCart} 
              updateNewItemCart={updateNewItemCart}
              dishes={dishes}
              setDishes={setDishes}
            />
          }/>
          <Route path='/cart' element={
            <Cart 
              cartItems={cartItems} 
              addNewItemInCart={addNewItemInCart} 
              deleteNewItemCart={deleteNewItemCart} 
              updateNewItemCart={updateNewItemCart}
              dishes={dishes}
            />
          }/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;