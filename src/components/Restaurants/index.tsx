import 'components/Restaurants/styles.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type RestaurantsType = {
    name: string
    slug: string
    phone: string
    email: string
    adress: string
    cuisine: string
    image: string
    openAt: Date
    closeAt: Date 
    description: string    
}

function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsType[]>([])

    useEffect(() => {
        loadRestaurants()
    }, [])

    const loadRestaurants = async () => {
        const response = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/restaurants"
        )
        const data = await response.json()   
        setRestaurants(data)
    }

    // не работает лоадер 
    if(!restaurants) {
        return (
            <div className="loader">Loading...</div>
        )
    } else {
        return(
            <div className="restaurants">
                <div className="inner">
                    <p className="restaurants_title">Выберите ресторан</p>
                    
                    <div className="restaurants_cards">
                        {restaurants.map((rest, index) => {
                            return (
                                <div key={rest.name + index} className='restaurants_cards_item'>
                                    <img className="restaurants_cards_item_image" src={rest.image} alt=""/>
                                    <div className="restaurants_cards_item_text">
                                        <p className='restaurants_cards_item_text_title'>{rest.name}</p>
                                        <p className='restaurants_cards_item_text_cuisine'>{rest.cuisine}</p>
                                        <p className='restaurants_cards_item_text_description'>{rest.description}</p>
                                    </div>
    
                                    <Link to={`/restaurant/${rest.slug}`} className="restaurants_cards_item_link">
                                        <button className='restaurants_cards_item_link_btn'>выбрать</button>
                                    </Link>
                                </div>
                            )
                        })} 
                    </div>
                    
                </div>
                
            </div>
        ) 
    }

    
}
export default Restaurants