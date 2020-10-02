import React from 'react';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';
import DetailsPage from './containers/DetailsPage';

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
    {
        name : "DetailsPage",
        path : '/details',
        exact : true,
        main : () => <DetailsPage/>
    },
]

export default ROUTES;