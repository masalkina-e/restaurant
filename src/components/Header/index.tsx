import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className="bg-header">
            <div className="inner header">
                <div className="header_left">
                    <div>
                        <img className="header_left_logo" src="/images/logo.png" alt=""/>
                    </div>
                    <div className="header_left_title-blok">
                        <p className="header_left_title">САД</p>
                        <p>Лучший сервис доставки еды</p>
                    </div>
                </div>
                <div className="header_right">
                    <a href="" className="header_right_nav">О нас</a>
                    <a href="/#restaurants" className="header_right_nav">Рестораны</a>
                    <Link to='/cart' className="header_right_nav">Корзина</Link>
                    <Link to="/" className="header_right_nav">На главную</Link>
                </div>
            </div>
        </header>
        
    )
}
export default Header