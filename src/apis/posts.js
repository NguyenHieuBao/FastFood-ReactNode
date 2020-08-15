import axiosService from '../commons/axiosService';
import * as indexConstant from '../constants';

export const getListNewPosts = () => {
    return axiosService.get(`${indexConstant.URL_NEW_POSTS}`);
}