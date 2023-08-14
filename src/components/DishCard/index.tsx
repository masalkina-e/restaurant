import ButtonAddToCart from "components/Buttons/ButtonAddToCart"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { DishesType, CartItemtype } from "components/App";
import ButtonAddOrDeleteFromCart from "components/Buttons/ButtonAddOrDeleteFromCart";

type Props = {
    addNewItemInCart: (cartItem:CartItemtype) => void
    deleteNewItemCart:  (cartItem:CartItemtype) => void
    updateNewItemCart:  (cartItem:CartItemtype) => void
    cartItems: CartItemtype[]
    dishes: DishesType[]
    setDishes: (dish:DishesType[]) => void
}

function DishCard( {addNewItemInCart, deleteNewItemCart, updateNewItemCart, cartItems, dishes, setDishes}: Props) {
    const { slug } = useParams()
   
    useEffect(() => {
        loadDishes()
    }, [])

    const loadDishes = async () => {
        const response = await fetch(
        `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
        )
        const data = await response.json()   
        setDishes(data)
    }

    return(
        <div className="res_menu inner">
            <p className="res_menu_title">Выберите блюда</p>
            <div className="res_menu_cards">
                {dishes.map((dish, index) => {
                    return (
                        <div key={dish.name + index} className="res_menu_cards_item">
                            <img src={dish.image} alt="" className="res_menu_cards_item_image"/>
                            <div className="res_menu_cards_item_text">
                                <div className="res_menu_cards_item_text_flex">
                                    <p className="res_menu_cards_item_text_flex_title">{dish.name}</p>
                                    <p>{dish.description}</p>
                                </div>
                                <p className="res_menu_cards_item_text_price">Price: {dish.price} ₽</p>

                                <ButtonAddToCart 
                                    title="Добавить в корзину" 
                                    dish={dish} 
                                    addNewItemInCart={addNewItemInCart}
                                    updateNewItemCart={updateNewItemCart}
                                    cartItems={cartItems}
                                />

                                <ButtonAddOrDeleteFromCart 
                                    addNewItemInCart={addNewItemInCart} 
                                    updateNewItemCart={updateNewItemCart}
                                    dish={dish}
                                    cartItems={cartItems}
                                    deleteNewItemCart={deleteNewItemCart}
                                />
                            </div> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DishCard