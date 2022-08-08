import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [key: string]: any;
}
export const MyCheckbox = ({ label, ...props }: Props) => {
  const [
    field,
    // meta
  ] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && <span className='error'>{meta.error}</span>} */}
    </>
  );
};
