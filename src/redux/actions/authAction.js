import { SubmissionError } from 'redux-form';
import { SIGN_OUT_USER } from '../types';
import { closeModal } from './modalAction';


export const login = (user) => async (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase();
    try {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
        dispatch(closeModal());
    } catch (err) {
        console.log(err);
        throw new SubmissionError({ _error: err.message });
    };
};


export const registerUser = (user) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        console.log(createdUser);
        await createdUser.user.updateProfile({ displayName: user.displayName });

        let newUser = {
            displayName: user.displayName,
            createdAt: firestore.FieldValue.serverTimestamp()
        };

        await firestore.set(`usersCollection/${createdUser.user.uid}`, { ...newUser });

        dispatch(closeModal());
    } catch (err) {
        console.log(err);
        throw new SubmissionError({ _error: err.message });
    };
};



export const logout = () => {
    return {
        type: SIGN_OUT_USER
    };
};

