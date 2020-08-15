import * as productsConstant from '../constants/products';

export const fetchListProducts = (params = {}) => {
    return {
        type : productsConstant.FETCH_LIST_PRODUCTS,
        payload : {
            params
        }
    }
}
export const fetchListProductsSuccess = data => {
    return {
        type : productsConstant.FETCH_LIST_PRODUCTS_SUCCESS,
        payload : {
            data
        }
    }
}
export const fetchListProductsFailed = errors => {
    return {
        type : productsConstant.FETCH_LIST_PRODUCTS_FAILED,
        payload : {
            errors
        }
    }
}
export const fetchListProductsForPagination = page => {
    return {
        type : productsConstant.FETCH_LIST_PRODUCTS_FOR_PAGINATION,
        payload : {
            page
        }
    }
}
export const searchForCategories = categories => {
    return {
        type : productsConstant.SEARCH_FOR_CATEGORIES,
        payload : {
            categories
        }
    }
}
export const filterPrices = (min, max) => {
    return {
        type : productsConstant.FILTER_PRICES,
        payload : {
            min,
            max
        }
    }
}
export const sortPrices = sortPrices => {
    return {
        type : productsConstant.SORT_PRICES,
        payload : {
            sortPrices
        }
    }
}
export const fetchListHotProducts = () => {
    return {
        type : productsConstant.FETCH_LIST_HOT_PRODUCTS
    }
}
export const fetchListHotProductsSuccess = data => {
    return {
        type : productsConstant.FETCH_LIST_HOT_PRODUCTS_SUCCESS,
        payload : {
            data
        }
    }
}