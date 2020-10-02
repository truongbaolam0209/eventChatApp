import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import { Button, Divider, Form, Label, Segment } from 'semantic-ui-react';
import { registerUser } from '../../redux/actions/authAction';
import TextInput from '../ui/TextInput';
import SocialLogin from './SocialLogin';


const validate = combineValidators({
    displayName: isRequired('displayName'),
    email: isRequired('email'),
    password: isRequired('password')
});


const FormRegister = (props) => {

    const { handleSubmit, registerUser, error, invalid, submitting } = props;

    return (
        <div>
            <Form size='large' autoComplete='off' onSubmit={handleSubmit(registerUser)}>
                <Segment>
                    <Field
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Field
                        name='email'
                        type='text'
                        component={TextInput}
                        placeholder='Email'
                    />
                    <Field
                        name='password'
                        type='password'
                        component={TextInput}
                        placeholder='Password'
                    />
                    {error && <Label basic color='red'>{error}</Label>}
                    <Button
                        disabled={invalid || submitting}
                        fluid
                        size='large'
                        color='teal'
                    >Register</Button>
                    <Divider horizontal>Or</Divider>
                    <SocialLogin />
                </Segment>
            </Form>
        </div>
    );
};

export default connect(null, {
    registerUser
})(reduxForm({ form: 'formRegister', validate })(FormRegister));

