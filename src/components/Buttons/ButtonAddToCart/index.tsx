import 'components/Buttons/ButtonAddToCart/styles.scss'
import { DishesType, CartItemtype } from "components/App"
import uuid4 from "uuid4"

type Props = {
    title: string
    dish: DishesType
    addNewItemInCart: (cartItem:CartItemtype) => void
    cartItems:CartItemtype[]
}

function ButtonAddToCart( {title, dish, addNewItemInCart, cartItems}:Props ) {


    const onClick = () => {
        let count = 0
        const uniqID = uuid4()
        const cartItem:CartItemtype = {
            id: uniqID,
            foodItemId: dish.id,
            quantity: count ++,
            name: dish.name,
            description : dish.description,
            price: dish.price,
            image: dish.image
        }
        addNewItemInCart(cartItem)
    }

    return(   
        <button 
            className='btn'
            onClick={() => onClick()}
        >
            {title}
        </button>
    )
}

export default ButtonAddToCart