import { format, parseISO } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';



const EventListItem = (props) => {

    const { event, deleteEvent } = props;

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size='tiny'
                            circular
                            src={event.hostPhotoURL}
                        />
                        <Item.Content>
                            <Item.Header as='a'>{event.title}</Item.Header>
                            <Item.Description>Hosted by {event.hostedBy}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{format(parseISO(event.date), 'EEEE do LLL')} at{' '}{format(parseISO(event.date), 'h:mm a')} |
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees && Object.values(event.attendees).map((attendee, index) => (
                        <EventListAttendee key={index} attendee={attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button onClick={() => deleteEvent(event.id)} as='a' color='red' floated='right' content='Delete' />
                <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    );
};

export default EventListItem;

