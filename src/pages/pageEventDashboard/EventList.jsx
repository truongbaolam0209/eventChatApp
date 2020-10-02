import React, { Fragment } from 'react';
import EventListItem from './EventListItem';


const EventList = (props) => {

    const { events, selectEvent, deleteEvent } = props;

    return (
        <Fragment>
            {events && events.map(event => (
                <EventListItem
                    key={event.id}
                    event={event}
                    selectEvent={selectEvent}
                    deleteEvent={deleteEvent}
                />
            ))}
        </Fragment>
    );
};

export default EventList;