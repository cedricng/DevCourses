import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import "./../Input/Input.css";

const signupSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "user name can not be less than 4")
        .required("name can not be empty"),
    email: Yup.string()
        .email()
        .required("email can not be empty"),
    password: Yup.string()
        .min(6, "password can not be less than 6")
        .required("password can not be empty")
});

const Signup = () => {
    const signup = values => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={signupSchema}
            onSubmit={signup}
        >
            {({ values, handleChange, errors, handleSubmit }) => (
                <div>
                    <h1 className="form__title">Signup</h1>
                    <Input
                        value={values.name}
                        onchange={handleChange}
                        error={errors.name}
                        name="name"
                        type="text"
                        placeholder="enter your name"
                    />
                    <Input
                        value={values.email}
                        onchange={handleChange}
                        error={errors.email}
                        name="email"
                        type="email"
                        placeholder="enter your email"
                    />
                    <Input
                        value={values.password}
                        onchange={handleChange}
                        error={errors.password}
                        name="password"
                        type="password"
                        placeholder="enter your password"
                    />
                    <button className="submit" type="submit" onClick={handleSubmit}>
                        Signup
                    </button>
                </div>
            )}
        </Formik>
    );
};

export default Signup;
