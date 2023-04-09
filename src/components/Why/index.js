import React from 'react';
import whyLog from "../img/why-log.svg"
const Why = () => {
    return (
        <div id="Why">
            <div className="container">
                <div className="Why">
                    <img src={whyLog} alt=""/>
                    <div className="Why--title">
                        <h1>Чем мы занимаемся?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat <br/>
                            elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum <br/>
                            vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean <br/>
                            consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat <br/>
                            mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. <br/>
                            Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;