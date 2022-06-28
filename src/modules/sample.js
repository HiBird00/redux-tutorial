import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from "redux-actions";
import { finishLoading, startLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action) {
//     yield put(startLoading(GET_POST));
//     try {
//         // call : Promise를 반환하는 함수 호출 및 기다림
//         // [함수, 인수]
//         const post = yield call(api.getPost, action.payload);
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data
//         });
//     } catch (e) {
//         yield put({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         });
//     }
//     yield put(finishLoading(GET_POST)); // 로딩 완료
// }

// function* getUsersSaga() {
//     yield put(startLoading(GET_USERS));
//     try {
//         const users = yield call(api.getUsers);
//         yield put({
//             type: GET_USERS_SUCCESS,
//             payload: users.data
//         });
//     } catch (e) {
//         yield put({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         });
//     }
//     yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

// export const getPost = id => async (dispatch) => {
//     dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//     try {
//         const res = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: res.data
//         }); // 요청 성공
//     } catch (e) {
//         dispatch({
//             type: 'GET_POST_FAILURE',
//             payload: e,
//             error: true,
//         }); //  에러 발생
//         throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
//     }
// };

// export const getUsers = () => async (dispatch) => {
//     dispatch({ type: GET_USERS });
//     try {
//         const res = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: res.data
//         });
//     } catch (e) {
//         dispatch({
//             type: 'GET_USERS_FAILURE',
//             payload: e,
//             error: true,
//         });
//         throw e;
//     }
// }

const initialState = {
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        }),
    },
    initialState
)

export default sample;