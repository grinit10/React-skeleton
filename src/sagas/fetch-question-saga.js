import { takeEvery, put, call } from 'redux-saga/effects'
import apis from './../apis/index.api';

export default function * () {
    /**
     * Every time REQUEST_FETCH_QUESTION, fork a handleFetchQuestion process for it
     */
    yield takeEvery(`REQUEST_FETCH_QUESTION`,handleFetchQuestion);
}

/**
 * Fetch question details from the local proxy API
 */
export function * handleFetchQuestion ({question_id}) {
    const raw = yield call(() => apis.questionAPI.fetchQuestion(question_id))
    yield console.log(raw);
    const json = yield raw.json();
    const question = json.items[0];
    /**
     * Notify application that question has been fetched
     */
    yield put({type:`FETCHED_QUESTION`,question});
}