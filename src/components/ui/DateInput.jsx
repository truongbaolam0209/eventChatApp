import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Label } from 'semantic-ui-react';

const DateInput = (props) => {

    const { input, width, placeholder, meta: { touched, error }, ...rest } = props

    return (
        <Form.Field error={touched && !!error}>
            <DatePicker
                {...rest}
                placeholderText={placeholder}
                selected={input.value ? new Date(input.value) : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                onChangeRaw={(e) => e.preventDefault()}
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    );
};

export default DateInput;
