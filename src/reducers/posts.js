import * as postsConstant from '../constants/posts';

const initialState = {
    newPosts : []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case postsConstant.FETCH_LIST_NEWS_POSTS_SUCCESS : {
            return {
                ...state,
                newPosts : action.payload.data
            }
        }
        case postsConstant.FETCH_LIST_POSTS_FAILED : {
            return {
                ...state
            }
        }
        default : return state;
    }
}
export default reducer;