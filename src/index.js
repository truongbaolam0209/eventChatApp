import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import reduxThunk from 'redux-thunk';
import App from './App';
import firebase from './config/firebase';
import './index.css';
import rootReducer from './redux/reducers';
import ScrollToTop from './utils/ScrollToTop';


// npm packages compatibility issue
// npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4

const middlewares = [reduxThunk.withExtraArgument({ getFirebase, getFirestore })];


const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
);


const store = createStore(
    rootReducer,
    composedEnhancer
);




// let render = () => {
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <ReduxToastr
                    position='bottom-right'
                    transitionIn='fadeIn'
                    transitionOut='fadeOut'
                />
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
// };


// if (module.hot) {
//     module.hot.accept('./App.js', () => {
//         setTimeout(render);
//     });
// };

// store.firebaseAuthIsReady.then(() => {
//     render();
// });










