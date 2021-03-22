import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import storeSagas from 'store/saga'
import reducer from './reducers'

function* rootSaga() {
    yield all(storeSagas);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));