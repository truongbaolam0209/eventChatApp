import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Label, Segment } from 'semantic-ui-react';
import { login } from '../../redux/actions/authAction';
import TextInput from '../ui/TextInput';


const FormLogin = (props) => {
    console.log(props);
    
    const { login, handleSubmit, error } = props;

    
    return (
        <Form size='large' onSubmit={handleSubmit(login)} autoComplete='off'>
            <Segment>
                <Field
                    name='email'
                    component={TextInput}
                    type='text'
                    placeholder='Email Address'
                />
                <Field
                    name='password'
                    component={TextInput}
                    type='password'
                    placeholder='password'
                />
                {error && <Label basic color='red'>{error}</Label>}
                <Button fluid size='large' color='teal'>Login</Button>
            </Segment>
        </Form>
    );
};

export default connect(null, {
    login
})(reduxForm({ form: 'formLogin' })(FormLogin));
