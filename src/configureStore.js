import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducersEnhancer from './commons/enhancers/monitorReducers'
import loggerMiddleware from './commons/middleware/logger'
import rootReducer from './reducers'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  
  return store
}