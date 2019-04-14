import { put, take, call } from 'redux-saga/effects'
import apis from './../apis/index.api';
/**
 * Fetch questions saga gets a list of all new
 * questions in response to a particular view being loaded
 */
export default function * () {
    while (true) {
        /**
         * Wait for a request to fetch questions, then fetch data from the API and notify the application
         * that new questions have been loaded.
         */
        yield take(`REQUEST_FETCH_QUESTIONS`);
        const raw = yield call(apis.questionsAPI.fetchQuestions)
        const json = yield raw.json();
        const questions = json.items;
        yield put({type:`FETCHED_QUESTIONS`,questions});
    }
}