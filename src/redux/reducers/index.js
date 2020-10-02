import { firebaseReducer } from 'react-redux-firebase';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
import asyncReducer from './asyncReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';


export default combineReducers({
    form: formReducer,
    toastr: ToastrReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    eventReducer,
    modalReducer,
    asyncReducer
});