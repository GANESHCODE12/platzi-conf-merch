import React from 'react';
import { Products } from '@containers/Products';
import initialState from '../initialState';

const Home = () => {
    return (
        <Products products={initialState.products} />
    )
}

export { Home };