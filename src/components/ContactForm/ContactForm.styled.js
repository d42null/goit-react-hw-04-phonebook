import styled from 'styled-components';
import { ErrorMessage, Form } from 'formik';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 8px;
  text-align: start;
`;
export const Button = styled.button`
  padding: 4px;
  margin: 8px;
`;
export const Error = styled(ErrorMessage)`
  font-size: small;
  color: coral;
  padding: 4px;
`;
export const FormContainer = styled(Form)`
  border: 1px solid #666;
  text-align: center;
`;
