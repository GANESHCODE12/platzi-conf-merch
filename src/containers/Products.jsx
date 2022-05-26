import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { Product } from '@components/Product';
import '@styles/containers/Products.css'

const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product);
    }

    return (
        <div className='Products'>
            <div className='Products-items'>
                {products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export { Products };