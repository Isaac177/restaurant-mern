import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {showErrorMessage} from "../helpers/message";
import {showLoading} from "../helpers/loading";

const SignIn = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        errorMsg: false,
        loading: false,
        redirectToDashboard: false
    });

    const {email, password, errorMsg, loading, redirectToDashboard} = formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: ''
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (email && password) {
            setFormData({...formData, loading: true});
            const {email, password} = formData;
            const loginData = {email, password};
            console.log('loginData', loginData);
        } else {
            setFormData({
                ...formData,
                errorMsg: 'Please fill in all fields'
            });
        }
    }

    const showSigninForm = () => (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            {errorMsg && showErrorMessage(errorMsg)}
            <div className="flex items-center justify-between">
                <button
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                >
                    Sign In
                </button>
                <a
                    className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
            <div className="flex items-center justify-between mt-4">
                <span className="text-gray-700">Don't have an account ?</span>
                <Link to='/signup' className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800">
                    Sign Up
                </Link>
            </div>
        </form>);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-sm">
                {loading && <div className="text-center pb-4">{showLoading()}</div>}
                {showSigninForm()}
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default SignIn;
