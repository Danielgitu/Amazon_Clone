import React from 'react';
import './Subtotal.css';
import {NumericFormat} from 'react-number-format';
  
import { useStateValue } from '../StateProvider/Stateprovider';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
const [{ basket }, dispatch] = useStateValue();
const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment');
    };
const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
};

return (
    <div className="subtotal">
        <NumericFormat
        renderText={(value) => (
        <>
            <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={'$'}
        />
    <button onClick={handleClick}>Proceed to Checkout</button>
    </div>
);
}

export default Subtotal;
