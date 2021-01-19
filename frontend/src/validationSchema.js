import * as Yup from 'yup';

export const signupSchema = Yup.object({
    username: Yup.string()
        .min(5, "Must be at least 5 characters")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    firstName: Yup.string()
        .max(20, "Must be 20 characters or less"),
    lastName: Yup.string()
        .max(20, "Must be 20 characters or less"),
    password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password and Confirm must match")
        .min(8, "Must be at least 8 characters")
        .required("Required")
});

export const loginSchema = Yup.object({
    username: Yup.string()
        .min(5, "Must be at least 5 characters")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required")
});
