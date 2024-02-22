import React from 'react';
import MyComponent from '../../Mycomponent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    return (
       <HelmetProvider>
        <Helmet>
            <title>
                Contact List
            </title>
        </Helmet>
        <MyComponent></MyComponent>
        </HelmetProvider>
    );
}

export default Home;