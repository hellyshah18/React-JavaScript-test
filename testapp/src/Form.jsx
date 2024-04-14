import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, TextField } from '@material-ui/core';
import * as Yup from 'yup';

export const TestForm = () => {
    const ValidationSchema=()=>{
        return Yup.object().shape({
            firstname:Yup.string().required('Please enter FullName').max(10,'Enter less than 10 characters'),
            lastname:Yup.string().required('Please enter LastName').max(10,'Enter less than 10 characters'),
            email:Yup.string().required('Please dont leave the textbox empty').email('Enter a valid Email'),
            password:Yup.string().required('Please dont leave the textbox empty').min(6,'Create password that has more than 6 characters and less 20 characters').max(20,'Create password that has more than 6 characters and less 20 characters'),
            confirmPassword:Yup.string().required('Please').oneOf([Yup.ref('password'),null],'Both passwords dont match'),
            phonenumber:Yup.number().required('Please enter PhoneNumber'),
        })
    }

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
                phonenumber: ''
            }}
            onSubmit={(value)=>{
                console.log(value)
            }}
            validationSchema={ValidationSchema}
        >
            <Form>
                <div className="form-group">
                    <TextField
                        name="firstname"
                        type="text"
                        label="First Name"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="firstname"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <TextField
                        name="lastname"
                        type="text"
                        label="Last Name"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="lastname"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <TextField
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <TextField
                        name="phonenumber"
                        type="number"
                        label="Phone Number"
                        variant="outlined"
                    />
                    <ErrorMessage
                        name="phonenumber"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};
