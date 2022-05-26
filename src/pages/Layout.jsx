import React from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import "@styles/pages/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className='Main'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export { Layout };