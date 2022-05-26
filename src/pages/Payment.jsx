import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { AppContext } from '@context/AppContext';
import { handleSumTotal } from '@utils/sumTotal';
import '@styles/pages/Payment.css'

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart, buyer } = state;
    const [paidFor , setPaidFor] = useState(false)

    const handleApprove = (data) => {
        setPaidFor(true),
        buyer
    }

    const history = useNavigate()
    if(paidFor)
    {
        history('/checkout/success')
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((product) => (
                <div key={product.id} className="Payment-item">
                    <div className="Payment-element">
                        <h4>{product.title}</h4>
                        <span>{product.price}</span>
                    </div>
                </div>
            ))}
            {cart.length > 0 ? (
                <h3>{`Total: ${handleSumTotal(cart)}`}</h3>
            ) : <></> }
            <div className="Payment-button" id="payment-button-container">
                <PayPalButtons
                    style={{
                        layout: "vertical"
                    }}
                    disabled={false}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: handleSumTotal(cart).toFixed(2),
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            handleApprove(data);
                        });
                    }}
                />
                    </div>
                </div>
            <div />
        </div>
    );
}

export { Payment };