import React, { createContext } from 'react';
import { useInitialState } from '@hooks/useInitialState';

const AppContext = createContext();

function ProviderAppContext(props) {
    const { 
        state, 
        addToCart, 
        removeFromCart,
        addToBuyer
    } = useInitialState();
    
    return (
        <AppContext.Provider
            value={{
                state,
                addToCart,
                removeFromCart,
                addToBuyer
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export { ProviderAppContext, AppContext };