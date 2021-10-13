import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(3, 'Name must be 3 or more characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('Password is required ya chump!')
        .min(8, 'Password needs to be 8 characters long!'),
    avatar: yup
        .string()
        .required()
        .url('Must be a valid image url.'),
    termsOfService: yup.boolean().oneOf([true], 'Please accept terms of service')
});

export default schema;