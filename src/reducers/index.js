import { combineReducers } from "redux";
import loginReducer from './login.reducers'
import appReducer from './app.reducers'
import stockReducer from './stock.reducer'
import stockEditReducer from './stock.edit.reducer'
import shopReducer from './shop.reducers'
import transactionReducer from './transaction.reducers';

import { reducer as form } from 'redux-form';

export default combineReducers({loginReducer,appReducer,stockReducer,form,stockEditReducer,shopReducer,transactionReducer})