import { Formik,Form,Field } from 'formik'
import React from 'react'

export const RegisterationForm = () => {
    let a=[]
  return (
    <div>
        <Formik
        initialValues={{
            title:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:''
        }}
        onSubmit={(values)=>{
            a=values;
            console.log(a)
        }}
        >
            <Form>
      
                <label htmlFor="title">Title</label>
                <Field name="title" />

                <label>First Name</label>
                <Field name="firstname" />

                <label htmlFor="lastname">Last Name</label>
                <Field name="lastname" />
                
                 <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />

                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field type="confirmpassword" name="confirmpassword" />
                <input type='submit' value="save" />
            </Form>
        </Formik>
    </div>
  )
}
