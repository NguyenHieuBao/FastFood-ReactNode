import { takeLatest } from 'redux-saga/effects';
import * as productsConstant from '../constants/products';
import * as categoriesConstant from '../constants/categories';
import * as postsConstant from '../constants/posts';
import * as productsSaga from './products';
import * as categoriesSaga from './categories';
import * as postsSaga from './posts';

function* rootSaga(){
    
    //products
    yield takeLatest(productsConstant.FETCH_LIST_PRODUCTS, productsSaga.getListProducts);
    yield takeLatest(productsConstant.FETCH_LIST_PRODUCTS_FOR_PAGINATION, productsSaga.getListProductsForPagination);
    yield takeLatest(productsConstant.FETCH_LIST_HOT_PRODUCTS, productsSaga.getListHotProducts);
    yield takeLatest(productsConstant.GET_LIST_NAME_SEARCH_ALL, productsSaga.getListNameProductsFromSearch);

    //categories
    yield takeLatest(categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS, categoriesSaga.getListCategories);

    //posts
    yield takeLatest(postsConstant.FETCH_LIST_NEWS_POSTS, postsSaga.getListNewPosts);
}

export default rootSaga;