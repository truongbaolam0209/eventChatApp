import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextArea = (props) => {

    const { input, rows, type, placeholder, meta: { touched, error } } = props;

    return (
        <Form.Field error={touched && !!error}>
            <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}

export default TextArea
