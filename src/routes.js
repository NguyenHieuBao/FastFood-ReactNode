import React from 'react';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';

const ROUTES = [
    {
        name : "HomePage",
        path : '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        name : "ProductsPage",
        path : '/products',
        exact : true,
        main : () => <ProductsPage/>
    },
]

export default ROUTES;