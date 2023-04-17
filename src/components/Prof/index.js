import React from 'react';
import icon from "../img/icon1.png"
import icon1 from "../img/icon2.png"
import icon2 from "../img/icon3.png"

const Prof = () => {
    return (
        <div id="Prof">
            <div className="container">
                <div className="Prof">
                    <h1>Получите профессию прямо сейчас</h1>
                    <div className="Prof--title">
                        <div className="Prof--title__icon">
                            <img src={icon} alt=""/>
                            <h1>Только практические <br/>
                                навыки в работе</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                adipiscing elit. Netus eget velit quisque accumsan <br/>
                                amet tortor. Velit, volutpat egestas fringilla mi <br/>
                                porttitor tempus. Placerat dui.</p>
                        </div>
                        <div className="Prof--title__icon">
                            <img src={icon1} alt=""/>
                            <h1>ТРабота на самом <br/>
                                современном оборудовании</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                adipiscing elit. Netus eget velit quisque accumsan <br/>
                                amet tortor. Velit, volutpat egestas fringilla mi <br/>
                                porttitor tempus. Placerat dui.</p>
                        </div>
                        <div className="Prof--title__icon">
                            <img src={icon2} alt=""/>
                            <h1>Сертификация <br/>
                                по окончании обучения</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/>
                                adipiscing elit. Netus eget velit quisque accumsan <br/>
                                amet tortor. Velit, volutpat egestas fringilla mi <br/>
                                porttitor tempus. Placerat dui.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Prof;