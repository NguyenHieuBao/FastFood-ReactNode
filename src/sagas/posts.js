import { call, put } from 'redux-saga/effects';
import * as postsApi from '../apis/posts';
import {
        fetchListNewPostsSuccess,
        fetchListPostsFailed
} from '../actions/posts';

export const getListNewPosts = function* getListNewPosts(){
    try{
        const resp = yield call(postsApi.getListNewPosts);
        const { data } = resp;
        yield put(fetchListNewPostsSuccess(data));
    }catch(errors){
        yield put(fetchListPostsFailed(errors));
    }
}