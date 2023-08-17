import 'components/Buttons/ButtonAddToCart/styles.scss'
import { DishesType, CartItemtype, AppContext } from "components/App"
import uuid4 from "uuid4"
import { useContext } from 'react'

type Props = {
    title: string
    dish: DishesType
    slug: string
}

function ButtonAddToCart( {title, dish, slug}:Props ) {

    const { addNewItemInCart, updateNewItemCart, cartItems } = useContext(AppContext)

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
                restaurantSlug: slug,
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