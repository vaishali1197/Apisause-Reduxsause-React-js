import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import sagas from "./sagas/employee.sagas";
import { loadState, saveState } from '../common/localStorage'
import { loggerMiddleware } from './middleware/loggerMiddleware'
import _ from "lodash"
const configStore = () => {
    const sagaMiddleware = createSageMiddleware();
    const persistStore = loadState();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, persistStore, composeEnhancer(applyMiddleware(sagaMiddleware, loggerMiddleware)))

    sagaMiddleware.run(sagas)
    
    store.subscribe(_.throttle(() => {
        saveState(store.getState());
    }, 1000))

    return store;

}
export default configStore;