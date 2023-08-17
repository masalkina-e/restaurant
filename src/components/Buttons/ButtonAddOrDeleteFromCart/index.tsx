import 'components/Buttons/ButtonAddOrDeleteFromCart/styles.scss';
import { DishesType, CartItemtype, AppContext} from "components/App"
import uuid4 from "uuid4"
import { useContext } from 'react'

type Props = {
    dish:DishesType
    slug: string
}
function ButtonAddOrDeleteFromCart( { dish, slug }: Props ) {

    const { addNewItemInCart, updateNewItemCart, deleteNewItemCart, cartItems } = useContext(AppContext)

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
                restaurantSlug: slug,
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
