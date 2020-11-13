import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authentification';

export default combineReducers({
    auth: authReducer,
    form
});
