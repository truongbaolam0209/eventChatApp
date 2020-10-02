import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { createEvent, updateEvent } from '../redux/actions/eventAction';
import DateInput from '../components/ui/DateInput';
import SelectInput from '../components/ui/SelectInput';
import TextArea from '../components/ui/TextArea';
import TextInput from '../components/ui/TextInput';


const validate = combineValidators({
    title: isRequired({ message: 'The event title is required' }),
    category: isRequired({ message: 'The category is required' }),
    description: composeValidators(
        isRequired({ message: 'Please enter a description' }),
        hasLengthGreaterThan(4)({ message: 'Description needs to be at least 5 characters' })
    )(),
    city: isRequired('city'),
    venue: isRequired('venue'),
    date: isRequired('date')
});

const category = [
    { key: 'drinks', text: 'Drinks', value: 'drinks' },
    { key: 'culture', text: 'Culture', value: 'culture' },
    { key: 'film', text: 'Film', value: 'film' },
    { key: 'food', text: 'Food', value: 'food' },
    { key: 'music', text: 'Music', value: 'music' },
    { key: 'travel', text: 'Travel', value: 'travel' }
];



const PageEventForm = (props) => {


    const { history, createEvent, updateEvent, selectedEvent } = props;
    const { handleSubmit, invalid, submitting, pristine } = props;

    const onFormSubmit = (data) => {
        if (selectedEvent !== null) {
            console.log('old');
            updateEvent(data);
            history.push(`/events/${selectedEvent.id}`);
        } else {
            console.log('new');
            data.date = moment(data.date).format('YYYY-MM-DD');
            const newEvent = {
                ...data,
                id: uuidv4(),
                hostPhotoURL: '/assets/user.png',
                hostedBy: 'Bob'
            };
            createEvent(newEvent);
            history.push(`/events/${newEvent.id}`);
        };
    };




    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment>
                    <Header sub color='teal' content='Event details' />
                    <Form
                        onSubmit={handleSubmit(onFormSubmit)}
                        autoComplete='off'
                    >
                        <Field
                            name='title'
                            component={TextInput}
                            placeholder='Give your event a name'
                        />
                        <Field
                            name='category'
                            component={SelectInput}
                            options={category}
                            placeholder='What is your event about?'
                        />
                        <Field
                            name='description'
                            component={TextArea}
                            rows={3}
                            placeholder='Tell us about your event'
                        />
                        <Header sub color='teal' content='Event location details' />
                        <Field
                            name='city'
                            component={TextInput}
                            placeholder='Event city'
                        />
                        <Field
                            name='venue'
                            component={TextInput}
                            placeholder='Event venue'
                        />
                        <Field
                            name='date'
                            component={DateInput}
                            dateFormat='dd LLL yyyy h:mm a'
                            placeholder='Event date'
                            showTimeSelect
                            timeFormat='HH:mm'
                        />
                        <Button disabled={invalid || submitting || pristine} positive type='submit'>Submit</Button>
                        <Button type='button'
                            onClick={!selectedEvent
                                ? () => history.push(`/events/${selectedEvent.id}`)
                                : () => history.push('events')
                            }
                        >Cancel</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};


const mapStateToProps = (state, props) => ({
    selectedEvent: state.eventReducer[props.match.params.id] ? state.eventReducer[props.match.params.id] : null,
});


export default connect(mapStateToProps, {
    createEvent,
    updateEvent
})(reduxForm({ form: 'eventForm', validate })(PageEventForm));