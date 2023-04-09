import React from 'react';

const Money = () => {
    return (
        <div id="Money">
            <div className="Money">
                <div className="Money">
                    <button>Заказать курс</button>
                    <div className="Money--title">
                        <div className="Money--title__flex">
                            <p>Учеников всего:</p>
                            <h6>200</h6>
                        </div>
                        <div className="Money--title__flex">
                            <p>Успешно закончили курс:</p>
                            <h6>190</h6>
                        </div>
                    </div>
                    <div className="Money--million">
                        <div className="Money--million__book">
                            <p>Заработано учениками:</p>
                            <h6>400 000₽</h6>
                        </div>
                        <div className="Money--million__liner">

                        </div>
                        <div className="Money--million__billion">
                            <p>0</p>
                            <h5>1 000 000₽</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Money;