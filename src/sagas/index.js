//import * as testSaga from "./testSaga";
import * as entriesSaga from "./entriesSaga";
import * as entrieSagaDeletion from "./entrieSagaDeletion";
import * as entrieSagaAdd from "./entrieSagaAdd";

export function initSagas(sagaMiddleware) {
  //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entrieSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entrieSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}