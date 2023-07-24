import { DishesType, CartItemtype } from "components/App"
import ButtonAddOrDeleteFromCart from "components/Buttons/ButtonAddOrDeleteFromCart";
import 'components/Pages/Cart/styles.scss';

type Props = {
    cartItems: CartItemtype[]
}

function Cart( {cartItems}:Props ) {
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

                                    {/* <ButtonAddToCart 
                                        title="Добавить в корзину" 
                                        dish={dish} 
                                        addNewItemInCart={addNewItemInCart}
                                    /> */}

                                    <ButtonAddOrDeleteFromCart id={item.id}/>
                                    
                                </div>
                        </div>
                    )
                })}
            </div>
            
        </section>
    )
}
export default Cart