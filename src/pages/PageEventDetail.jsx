import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './pageEventDetail/EventDetailedChat';
import EventDetailedHeader from './pageEventDetail/EventDetailedHeader';
import EventDetailedInfo from './pageEventDetail/EventDetailedInfo';
import EventDetailedSidebar from './pageEventDetail/EventDetailedSidebar';



const PageEventDetail = (props) => {

    const { event } = props;

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>
    );
};


const mapStateToProps = (state, props) => ({
    event: state.eventReducer[props.match.params.id]
})

export default connect(mapStateToProps)(PageEventDetail);