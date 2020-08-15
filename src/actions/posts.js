import * as postsConstant from '../constants/posts';

export const fetchListNewPosts = () => {
    return {
        type : postsConstant.FETCH_LIST_NEWS_POSTS
    }
}
export const fetchListNewPostsSuccess = data => {
    return {
        type : postsConstant.FETCH_LIST_NEWS_POSTS_SUCCESS,
        payload : {
            data
        }
    }
}
export const fetchListPostsFailed = errors => {
    return {
        type : postsConstant.FETCH_LIST_POSTS_FAILED,
        payload : {
            errors
        }
    }
}