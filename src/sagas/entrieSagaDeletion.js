import { call, take, put } from '@redux-saga/core/effects';
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';

export function* deleteEntrieSaga() {
	while (true) {
		const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
		yield call(entrieDelete, payload.id);
    yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
	}
}

function entrieDelete(id) {
	axios.delete(`http://localhost:3001/entries/${id}`);
	axios.delete(`http://localhost:3001/value/${id}`);
}
