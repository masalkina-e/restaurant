import { DishesType, CartItemtype } from "components/App"
import ButtonAddOrDeleteFromCart from "components/Buttons/ButtonAddOrDeleteFromCart";
import 'components/Pages/Cart/styles.scss';

type Props = {
    cartItems: CartItemtype[]
    addNewItemInCart: (cartItems:CartItemtype) => void
    deleteNewItemCart: (cartItems:CartItemtype) => void
    updateNewItemCart: (cartItems:CartItemtype) => void
    dishes: DishesType[]
}

function Cart( {cartItems, addNewItemInCart, deleteNewItemCart, updateNewItemCart, dishes}:Props ) {

    // const dish:DishesType[] = dishes.map((i) => {
    //     return i
    // })

    return(
        <section className="cart inner">
            <p className="cart_title">Ваш заказ</p>
            <div className="cart_cards">
                {cartItems.map((item, index) => {
                    return(
                        <div key={item.name + index} className="cart_cards_item">
                            <img src={item.image} alt="" className="cart_cards_item_image"/>
                                <div className="cart_cards_item_text">
                                    <div className="cart_cards_item_text_flex">
                                        <p className="cart_cards_item_text_flex_title">{item.name}</p>
                                        <p>{item.description}</p>
                                    </div>
                                    <p className="cart_cards_item_text_price">Price: {item.price} ₽</p>

                                    {/* <ButtonAddOrDeleteFromCart 
                                        addNewItemInCart={addNewItemInCart} 
                                        updateNewItemCart={updateNewItemCart}
                                        dish={dish}
                                        cartItems={cartItems}
                                        deleteNewItemCart={deleteNewItemCart}
                                    /> */}
                                    
                                </div>
                        </div>
                    )
                })}
            </div>
            
        </section>
    )
}
export default Cart