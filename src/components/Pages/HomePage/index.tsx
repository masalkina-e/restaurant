import Restaurants from "components/Restaurants"
import 'components/Pages/HomePage/styles.scss';

function HomePage() {
    return (
        <section className="homepage">
            <div className="bg-hero">
                <div className="inner homepage_hero">
                    <p className="homepage_hero_title">ДОСТАВЛЯЕМ ЕДУ НА ЛЮБОЙ ВКУС И ЦВЕТ</p>
                    <p className="homepage_hero_discription">Мы являемся лучшим сервисом доставки еды в городе Перми, наши клиентны остаются довольными, а еда теплой. Индивидульный подход - уникальность нашей доставки. А вы уже сделали свой первый заказ?</p>
                </div>
            </div>
            
            <Restaurants />

            <div className="bg-apps">
                <div className="inner homepage_apps">
                    <div className="homepage_apps_left">
                        <img className="homepage_apps_left_logo" src="images/logo-playmarkets.png" alt=""/>
                    </div>
                    <div className="homepage_apps_right">
                        <p>Скачивайте мобильное приложение и пользуйтесь еще удобнее</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomePage