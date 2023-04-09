import React from 'react';
import headerLogo from "../img/Group.png"


const Header = () => {
    return (
        <div id="Header">
                <div className="Header">
                    <img src={headerLogo} alt="img"/>
                    <div className="Header--icons">
                        <a href="#">Главная</a>
                        <a href="#">Курсы</a>
                        <a href="#">Расписание</a>
                        <a href="#">Преподаватели</a>
                        <a href="#">Рассылка</a>
                        <a href="#">Контакты</a>
                    </div>
                    <button>Зайти в кабинет</button>
                </div>
        </div>
    );
};

export default Header;