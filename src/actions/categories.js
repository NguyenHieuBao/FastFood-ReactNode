import * as categoriesConstant from '../constants/categories';


export const fetchListCategory = (params = {}) => {
    return {
        type : categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS,
        payload : {
            params
        }
    }
}
export const fetchListCategorySuccess = data => {
    return {
        type : categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS_SUCCESS,
        payload : {
            data
        }
    }
}
export const fetchListCategoryFailed = errors => {
    return {
        type : categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS_FAILED,
        payload : {
            errors
        }
    }
}