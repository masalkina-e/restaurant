import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'components/Pages/Restaurant/styles.scss';
import DishCard from "components/DishCard";
import { DishesType, CartItemtype } from "components/App"
import { format } from "date-fns"

type RestaurantType = {
    name: string
    id: number
    phone: string
    address: string
    email: string
    cuisine: string
    description: string
    openAt: Date
    closeAt: Date
    slug: string
    image: string
}

function Restaurant() {
    const { slug } = useParams<string>()

    const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
    
    useEffect(() => {
        loadRestaurant()
    }, [slug])

    const loadRestaurant = async () => {
        const response = await fetch(
          `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`
        )
        const data = await response.json()  
        console.log(data) 
        setRestaurant(data)
    }  

    // не работает лоадер
    if(!restaurant) {
        return (
            <div>Loading...</div>
        )
    } else {
        return(
            <section className="res inner">
                <div className="res_info">
                    <div className="res_info_flex">
                       <img src="/images/logo-food.png" alt="" className="res_info_flex_image"/>
                       <p className="res_info_flex_title">{restaurant.name}</p>
                    </div>
                    <p>cuisine: {restaurant.cuisine}</p>
                </div>
                
                <div className="res_discription">
                    <p>{restaurant.description}</p>

                    <div className="res_discription_contacts">
                        <div className="res_discription_contacts_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 icons">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            {restaurant.phone}
                        </div>

                        <div className="res_discription_contacts_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 icons">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            {restaurant.address}
                        </div>
                        
                        <div className="res_discription_contacts_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 icons">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <p>
                                {format(new Date(restaurant.openAt), "p")} - {format(new Date(restaurant.closeAt), "p")}
                            </p>
                        </div>
                    </div>
                </div>
                <DishCard />
                
            </section>
        )
    }
}
export default Restaurant