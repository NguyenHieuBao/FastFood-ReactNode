import { call, put, delay, select } from 'redux-saga/effects';
import * as productsApi from '../apis/products';
import {
        fetchListProducts, 
        fetchListProductsSuccess, 
        fetchListProductsFailed,
        fetchListHotProductsSuccess
} from '../actions/products';

export const getListProducts = function* getListProducts({payload}){
    try{
        const { params } = payload;
        const resp = yield call(productsApi.getProducts, params);
        const { data } = resp;
        yield put(fetchListProductsSuccess(data));
    }catch(errors){
        yield put(fetchListProductsFailed(errors));
    }
}
export const getListProductsForPagination = function* getListProductsForPagination({payload}){
    yield delay(500);
    const { page } = payload;
    const min = yield select(state => state.products.min);
    const max = yield select(state => state.products.max);
    const sortPrices = yield select(state => state.products.sortPrices);
    let categories = yield select(state => state.products.categories);
    categories = categories==="Tất cả" ? null : categories;
    
    yield put(fetchListProducts({
        categories,
        sortPrices,
        page,
        max,
        min
    }));
}
export const getListHotProducts = function* getListHotProducts(){
    try{
        const resp = yield call(productsApi.getHotProducts);
        const { data } = resp;
        yield put(fetchListHotProductsSuccess(data));
    }catch(errors){
        yield put(fetchListProductsFailed);
    }
}