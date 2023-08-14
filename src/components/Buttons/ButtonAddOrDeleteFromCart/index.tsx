import 'components/Buttons/ButtonAddOrDeleteFromCart/styles.scss';
import { DishesType, CartItemtype } from "components/App"
import uuid4 from "uuid4"

type Props = {
    addNewItemInCart:(cartItem:CartItemtype) => void
    updateNewItemCart:(cartItem:CartItemtype) => void
    deleteNewItemCart:(cartItem:CartItemtype) => void
    dish:DishesType
    cartItems:CartItemtype[]
}
function ButtonAddOrDeleteFromCart( {addNewItemInCart, updateNewItemCart, deleteNewItemCart, dish, cartItems}: Props ) {
    console.log(cartItems)
    
    const includedInCart = cartItems.find(cartItem => cartItem.foodItemId === dish.id)

    const onClickPlus = () => {
        
        if (includedInCart) {
            const cartItem: CartItemtype = {
                ...includedInCart,
                quantity: includedInCart.quantity + 1
            }
            updateNewItemCart(cartItem)

        } else {
            const uniqID = uuid4()
            const cartItem:CartItemtype = {
                id: uniqID,
                foodItemId: dish.id,
                quantity: 1,
                name: dish.name,
                description : dish.description,
                price: dish.price,
                image: dish.image
            }
            addNewItemInCart(cartItem)
        }
    }

    const onClickMinus = () => {
        if (includedInCart) {
            if (includedInCart.quantity > 1) {
                const cartItem: CartItemtype = {
                    ...includedInCart,
                    quantity: includedInCart.quantity - 1
                }
                updateNewItemCart(cartItem)
            } else {
                deleteNewItemCart(includedInCart)
            }
        } else {
            return
        }
    }

    return(
        <div className="btn">
            <button className='btn_actions' onClick={() => onClickMinus()}>-</button>
            <p>{includedInCart && includedInCart.quantity}</p>
            <p>{!includedInCart && "0"}</p>
            <button className='btn_actions' onClick={() => onClickPlus()}>+</button>
        </div>
    )
}
export default ButtonAddOrDeleteFromCart
