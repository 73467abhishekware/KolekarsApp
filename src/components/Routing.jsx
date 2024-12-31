import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Home from './Home';
import KnowMore from './KnowMore';
import Services from './Services';
import ContactUs from './ContactUs';


const customRounter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, // Default route
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/knowmore',
                element: <KnowMore />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            
            
        ] 
    }
]);

export default customRounter;

      