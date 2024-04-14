import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';


export const FormUsingYup = () => {
    const ValidationSchema=()=>{
        return Yup.object().shape({
            fullname:Yup.string().required('Please dont leave the textbox empty'),
            username:Yup.string().required('Please dont leave the textbox empty').min(6, 'Enter more than 6 characters').max(20,'Enter less than 20 characters'),
            email:Yup.string().required('Please dont leave the textbox empty').email('Enter a valid Email'),
            password:Yup.string().required('Please dont leave the textbox empty').min(6,'Create password that has more than 6 characters and less 20 characters').max(20,'Create password that has more than 6 characters and less 20 characters'),
            confirmPassword:Yup.string().required('Please').oneOf([Yup.ref('password'),null],'Both passwords dont match'),
            acceptTerms:Yup.bool().oneOf([true],'Please accept the terms and conditions')
        })
    }
  return (
    <Formik initialValues={{
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    }}
    
    onSubmit={(value)=>{

        console.log(value)

    }}

    validationSchema={ValidationSchema}
    
    >
        <Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field name="fullname" type="text" className="form-control" />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="username"> Username </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                   
                  </div>
                </Form>

    </Formik>
  )
}