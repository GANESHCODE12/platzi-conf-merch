import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { Map } from '@components/Map';
import "@styles/pages/Success.css";

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state

    return (
        <div className='Success'>
            <div className='Success-content'>
                <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
                <span>
                    Tu pedido llegará a tu casa en 3 días a tu dirección:
                </span>
                <div className='Success-map'>
                    <Map />
                </div>
            </div>
        </div>
    );
}

export { Success };