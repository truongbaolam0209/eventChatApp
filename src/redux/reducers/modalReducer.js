import { MODAL_CLOSE, MODAL_OPEN } from '../types';

const initState = null;

export default (state = initState, { type, payload }) => {
    switch (type) {

        case MODAL_OPEN:
            return payload;

        case MODAL_CLOSE:
            return null;

        default: return state;
    };
};

