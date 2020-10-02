import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../components/ui/LoadingComponent';
import { createEvent, deleteEvent, updateEvent } from '../redux/actions/eventAction';
import EventActivity from './pageEventDashboard/EventActivity';
import EventList from './pageEventDashboard/EventList';



const PageEventDashboard = (props) => {

    const { events, createEvent, deleteEvent, updateEvent, loading } = props;

    if (loading) return <LoadingComponent />

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent={deleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventActivity />
            </Grid.Column>
        </Grid>
    );
};



// const mapStateToProps = (state) => ({
//     events: state.firestoreReducer.ordered.events,
//     loading: state.asyncReducer.loading
// });
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
    events: state.firestore.ordered.events,
    loading: state.asyncReducer.loading
}};


export default connect(mapStateToProps, {
    createEvent,
    updateEvent,
    deleteEvent
})(firestoreConnect([{ collection: 'events' }])(PageEventDashboard));

