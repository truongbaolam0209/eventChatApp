import { LOGIN_USER, SIGN_OUT_USER } from '../types';

const initState = {
    authenticated: false,
    user: null
};

export default (state = initState, { type, payload }) => {
    switch (type) {

        case LOGIN_USER:
            return {
                authenticated: true,
                user: payload.creds.email
            };

        case SIGN_OUT_USER:
            return {
                authenticated: false,
                user: null
            };

        default:
            return state;
    };
};
