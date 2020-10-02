import { toastr } from 'react-redux-toastr';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../types';
import { asyncActionError, asyncActionFinish, asyncActionStart } from './asyncAction';


export const createEvent = (event) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_EVENT,
            payload: {
                event
            }
        });
        toastr.success('Success!', 'Event has been created');
    } catch (error) {
        toastr.error('Oops', 'Something went wrong');
    };
};


export const updateEvent = (event) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_EVENT,
            payload: {
                event
            }
        });
        toastr.success('Success!', 'Event has been updated');
    } catch (error) {
        toastr.error('Oops', 'Something went wrong');
    };
};


export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    };
};


export const loadEvents = () => async dispatch => {
    try {
        dispatch(asyncActionStart());

        // const events = await fetchSampleData();
        // dispatch({
        //     type: FETCH_EVENTS,
        //     payload: { events }
        // });

        dispatch(asyncActionFinish());
    } catch (error) {
        console.log(error);
        dispatch(asyncActionError());
    };
};
