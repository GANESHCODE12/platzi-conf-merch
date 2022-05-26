import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ProviderAppContext } from '@context/AppContext';
import { Layout } from "@pages/Layout";
import { Home } from "@pages/Home";
import { Checkout } from "@pages/Checkout";
import { Information } from "@pages/Information";
import { Payment } from "@pages/Payment";
import { Success } from "@pages/Success";
import { NotFound } from "@pages/NotFound";

const clientIdPayPal = process.env.CLIENT_ID_PP

const App = () => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": clientIdPayPal,
                currency: "USD",
                intent: "capture",
            }}>
            <ProviderAppContext>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/checkout' element={<Checkout />} />
                            <Route path='/checkout/information' element={<Information />} />
                            <Route path='/checkout/payment' element={<Payment />} />
                            <Route path='/checkout/success' element={<Success />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </ProviderAppContext>
        </PayPalScriptProvider>
    )
}

export { App };