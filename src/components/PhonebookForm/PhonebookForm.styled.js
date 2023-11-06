import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font-style: inherit;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
