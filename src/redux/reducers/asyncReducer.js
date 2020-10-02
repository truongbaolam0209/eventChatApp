import { ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from '../types';


const initState = {
    loading: false,
    elementName: null
};


export default (state = initState, { type, payload }) => {
    switch (type) {

        case ASYNC_ACTION_START:
            return {
                ...state,
                loading: true,
                elementName: payload
            };

        case ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading: false,
                elementName: null
            };

        case ASYNC_ACTION_ERROR:
            return {
                ...state,
                loading: false,
                elementName: null
            };

        default:
            return state;
    };
};