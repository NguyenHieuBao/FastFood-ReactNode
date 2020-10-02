import * as productsConstant from '../constants/products';

const initialState = {
    products : [],
    hotProducts : [],
    page : null,
    totalPage : null,
    min : null,
    max : null,
    sortPrices : null,
    categories : null,
    searchAll : [],
    keywordSearchAll : null
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case productsConstant.FETCH_LIST_PRODUCTS_SUCCESS : {
            return {
                ...state,
                products : action.payload.data.products,
                page : action.payload.data.page,
                totalPage : action.payload.data.totalPage
            }
        }
        case productsConstant.FETCH_LIST_HOT_PRODUCTS_SUCCESS : {
            return {
                ...state,
                hotProducts : action.payload.data
            }
        }
        case productsConstant.FETCH_LIST_PRODUCTS_FAILED : {
            return {
                ...state
            }
        }
        case productsConstant.SEARCH_FOR_CATEGORIES : {
            return {
                ...state,
                categories : action.payload.categories
            }
        }
        case productsConstant.FILTER_PRICES : {
            return {
                ...state,
                min : action.payload.min,
                max : action.payload.max
            }
        }
        case productsConstant.SORT_PRICES : {
            return {
                ...state,
                sortPrices : action.payload.sortPrices
            }
        }
        case productsConstant.SEARCH_ALL_SUCCESS : {
            return {
                ...state,
                searchAll : action.payload.data
            }
        }
        case productsConstant.SEARCH_ALL : {
            return {
                ...state,
                keywordSearchAll : action.payload.keyword
            }
        }
        default : return state;
    }
}

export default reducer;
