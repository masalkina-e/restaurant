import { DishesType, CartItemtype, AppContext } from "components/App"
import ButtonAddOrDeleteFromCart from "components/Buttons/ButtonAddOrDeleteFromCart";
import 'components/Pages/Cart/styles.scss';
import { useEffect, useState } from "react";
import { useContext } from 'react'

function Cart() {

    const { cartItems } = useContext(AppContext)
    const [dishes, setDishes] = useState<DishesType[]>([])

    useEffect(() => {
        loadDishes()
    }, [])

    const loadDishes = async () => {
        const response = await fetch(
        `https://www.bit-by-bit.ru/api/student-projects/restaurants/${cartItems[0].restaurantSlug}/items`
        )
        const data = await response.json()   
        setDishes(data)
    }

    return(
        <section className="cart inner">
            <p className="cart_title">Ваш заказ</p>
            <div className="cart_cards">
                {cartItems.map((item, index) => {

                    const dish:DishesType = dishes.find((i) => {
                        return i.id === item.foodItemId
                    })!
                    // console.log(dish)

                    return(
                        <div key={item.name + index} className="cart_cards_item">
                            <img src={item.image} alt="" className="cart_cards_item_image"/>
                                <div className="cart_cards_item_text">
                                    <div className="cart_cards_item_text_flex">
                                        <p className="cart_cards_item_text_flex_title">{item.name}</p>
                                        <p>{item.description}</p>
                                    </div>
                                    <p className="cart_cards_item_text_price">Price: {item.price} ₽</p>

                                    <ButtonAddOrDeleteFromCart 
                                        dish={dish}
                                    />
                                    
                                </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Cart