import React from 'react'
import {Formik,Field, Form}from 'formik'

export const LoginUsingFormik = () => {
    
  return (
    <div>
        <Formik
        initialValues={{
            email:'',
            password:''
        }}
        onSubmit={(values)=>{
            console.log(values);
        }}>
            <Form>

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                 <label htmlFor="password">Password</label>
                <Field type="password" name="password" />

                <input type='submit' value="save" />
            </Form>
        </Formik>
    </div>
  )
}
