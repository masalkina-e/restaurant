import 'components/Buttons/ButtonAddOrDeleteFromCart/styles.scss';
import { DishesType, CartItemtype } from "components/App"
import uuid4 from "uuid4"

type Props = {
    setCartItems:(cartItems:CartItemtype[]) => void
    addNewItemInCart:(cartItem:CartItemtype) => void
    dish:DishesType
    cartItems:CartItemtype[]
    id: string
}
function ButtonAddOrDeleteFromCart( {setCartItems, addNewItemInCart, dish, cartItems, id}: Props ) {
    console.log(id)

    const onClickPlus = () => {
        let count = 0

        const uniqID = uuid4()
        const cartItem:CartItemtype = {
            id: uniqID,
            foodItemId: dish.id,
            quantity: count++,
            name: dish.name,
            description : dish.description,
            price: dish.price,
            image: dish.image
        }
        addNewItemInCart(cartItem)
    }

    const onClickMinus = (id: string) => {
        const filtredCartItems = cartItems.filter(item => item.id != id)
        setCartItems(filtredCartItems)

    }

    return(
        <div className="btn">
            <button className='btn_action' onClick={() => onClickMinus(id)}>-</button>
            <p>0</p>
            <button className='btn_actions' onClick={() => onClickPlus()}>+</button>
        </div>
    )
}
export default ButtonAddOrDeleteFromCart
