export default function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <a href="index.html" class="logo">I-happy</a>

                <ul class="navbar-nav menu">
                    <li class="nav-item menu__li">
                        <a href="index.html" class="nav-link menu__link link-hover">Каталог</a>
                    </li>
                    <li class="nav-item menu__li">
                        <a href="about.html" class="nav-link menu__link link-hover">Про нас</a>
                    </li>
                    <li class="nav-item menu__li">
                        <a href="delivery.html" class="nav-link menu__link link-hover">Доставка і оплата</a>
                    </li>
                    <li class="nav-item menu__li">
                        <a href="contacts.html" class="nav-link menu__link link-hover">Контакти</a>
                    </li>
                </ul>

                <div class="footer__social">
                    <div class="social">
                        <a href="#" rel="nofollow" target="_blank" class="social__item facebook">
                            <svg class="icon icon-facebook"><use href="#icon-facebook"></use></svg>
                        </a>
                        <a href="#" rel="nofollow" target="_blank" class="social__item instagram">
                            <svg class="icon icon-instagram"><use href="#icon-instagram"></use></svg>
                        </a>
                        <a href="#" rel="nofollow" target="_blank" class="social__item youtube">
                            <svg class="icon icon-youtube"><use href="#icon-youtube"></use></svg>
                        </a>
                    </div>
                </div>

                <p class="footer__copyright">
                    <span>Всі права на статті, ілюстрації, інші матеріали належать site.com та охороняються законом України
                        «Про авторське право і суміжні права».<br />При використанні матеріалів посилання на сайт
                        обов'язкове!</span>
                    <span class="footer__developer">Розробник сайту: <a href="015161815326" target="_blank"></a></span>
                </p>
            </div>
        </div>
    )
}
