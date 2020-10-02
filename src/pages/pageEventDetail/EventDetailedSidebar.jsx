import React, { Fragment } from 'react';
import { Item, Label, Segment } from 'semantic-ui-react';



const EventDetailedSidebar = (props) => {

    const { attendees } = props;
    const isHost = false;

    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
            </Segment>

            <Segment attached>
                <Item.Group divided>
                    {attendees && attendees.map(attde => (
                        <Item key={attde.id} style={{ position: 'relative' }}>
                            {isHost && (
                                <Label
                                    style={{ position: 'absolute' }}
                                    color='orange'
                                    ribbon='right'
                                >Host</Label>
                            )}
                            <Item.Image size='tiny' src={attde.photoURL} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'>{attde.name}</Item.Header>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </Fragment>
    );
};

export default EventDetailedSidebar;
