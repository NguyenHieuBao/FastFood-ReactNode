import { call, put } from 'redux-saga/effects';
import * as categoriesApi from '../apis/categories';
import {
        fetchListCategorySuccess, 
        fetchListCategoryFailed
} from '../actions/categories';

export const getListCategories = function* getListCategories({payload}){
    try{
        const { params } = payload;
        const resp = yield call(categoriesApi.getCategories, params);
        const { data } = resp;
        yield put(fetchListCategorySuccess(data));
    }catch(errors){
        yield put(fetchListCategoryFailed(errors));
    }
}