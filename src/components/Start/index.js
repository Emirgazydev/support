import React from 'react';
import img from "../img/start-log.png"

const Start = () => {
    return (
        <div id="Start">
            <div className="container">
                <div className="Start">
                    <div className="Start--title">
                        <img src={img} alt=""/>
                        <h1>Быстрый старт</h1>
                    </div>
                    <p>Больше 90% учеников прошли полный курс и смогли <br/>
                        собрать свой первый компьютер</p>
                </div>
            </div>
        </div>
    );
};

export default Start;