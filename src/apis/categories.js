import axiosService from '../commons/axiosService';
import * as indexConstant from '../constants';
import qs from 'query-string';

export const getCategories = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${indexConstant.URL_CATEGORIES}${queryParams}`);
}