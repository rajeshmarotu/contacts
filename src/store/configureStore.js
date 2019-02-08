import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers/';



export default function configureStore(initialState: {}) {
 const logger = createLogger(
   {
    // level: 'warn'
     level: {
       nextState: false,
       action: false
     },
   //   color: {
   //     nextState: false,
   //     action: false
   //   }
   // }
  }
 )
  
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

return store;

}
