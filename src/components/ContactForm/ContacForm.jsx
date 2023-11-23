import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';
import { Component } from 'react';
import * as yup from 'yup';
import { Button, Error, FormContainer, Label } from './ContactForm.styled';
// import { FormikForm } from './ContactForm.styled';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;
const validationSchema = yup.object().shape({
  name: yup.string().min(4).max(50).required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});
export class ContactForm extends Component {
  onSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);
    resetForm();
  };
  render = () => (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={this.onSubmit}
    >
      <FormContainer>
        <Label>
          Name
          <Field name="name" />
          <Error name="name" component="div" />
        </Label>

        <Label>
          Number
          <Field name="number" />
          <Error name="number" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
