import * as categoriesConstant from '../constants/categories';

const initialState = {
    categories : [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS_SUCCESS : {
            return {
                ...state,
                categories : action.payload.data.categories,
            }
        }
        case categoriesConstant.FETCH_LIST_CATEGORY_PRODUCTS_FAILED : {
            return {
                ...state
            }
        }
        default : return state;
    }
}

export default reducer;
