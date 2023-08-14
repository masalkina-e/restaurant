import 'components/Buttons/ButtonAddToCart/styles.scss'
import { DishesType, CartItemtype } from "components/App"
import uuid4 from "uuid4"

type Props = {
    title: string
    dish: DishesType
    addNewItemInCart: (cartItem:CartItemtype) => void
    updateNewItemCart: (cartItem:CartItemtype) => void
    cartItems:CartItemtype[]
}

function ButtonAddToCart( {title, dish, addNewItemInCart, updateNewItemCart, cartItems}:Props ) {

    const addToCart = () => {

        const includedInCart = cartItems.find(cartItem => cartItem.foodItemId === dish.id)
 
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

    return(   
        <button 
            className='btn'
            onClick={() => addToCart()}
        >
            {title}
        </button>
    )
}

export default ButtonAddToCart