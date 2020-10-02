import axiosService from '../commons/axiosService';
import * as indexConstant from '../constants';
import qs from 'query-string';

export const getProducts = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${indexConstant.URL}${queryParams}`);
}
export const getHotProducts = () => {
    return axiosService.get(`${indexConstant.URL_HOT_PRODUCTS}`);
}
export const getProductsFromSearchAll = () => {
    return axiosService.get(`${indexConstant.URL_SEARCH_ALL}`);
}