import {take, delay, put, call} from 'redux-saga/effects';

function double(num) {
  return num * 2;
}

export function* testSaga() {
  while(true){ 
    console.log("Start testing saga from testSaga");
    const state = yield take('TEST_MESSAGE')
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(3);
    console.log(b)
    console.log("Finishing testing saga from testSaga", state);
  }
};

export function* count() {
  while(false){
    yield delay(3000)
    yield put({type:'TEST_MESSAGE', payload: 1000});
  }
}