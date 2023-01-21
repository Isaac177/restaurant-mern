import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import {Link} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";
import isEmail from "validator/es/lib/isEmail";
import equals from "validator/es/lib/equals";
import {showSuccessMessage, showErrorMessage} from "../helpers/message";
import {showLoading} from "../helpers/loading";
import {signup} from "../api/auth";

const SignUp = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    });

    const { username, email, password, password2, successMsg, errorMsg, loading } = formData;

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: ''
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required'
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email'
            });
        } else if (!equals(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match'
            });
        } else {
            setFormData({...formData, loading: true});
            const data = {username, email, password, password2};

            signup(data)
            .then(response => {
                console.log('response', response);
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    password2: '',
                    loading: false,
                    successMsg: response.data.successMessage || true
                });
            })
            .catch(err => {
                console.log('err', err);
                setFormData({
                    ...formData,
                    loading: false,
                    errorMsg: err.response.data.errorMessage || true
                });
            });
        }
    }

    const showSignupForm = () => (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-sm">
                {loading && <div className="text-center pb-4">{showLoading()}</div>}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Choose a username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Enter your email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
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
                            Choose a password
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
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password2"
                        >
                            Confirm your password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password2"
                            type="password"
                            placeholder="********"
                            name="password2"
                            value={password2}
                            onChange={handleChange}
                        />
                    </div>
                    {successMsg && showSuccessMessage(successMsg)}
                    {errorMsg && showErrorMessage(errorMsg)}

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSubmit}
                        >
                            <FaUserPlus className="mr-2" /> Sign Up
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-700">Already have an account ?</span>
                        <Link to='/signin' className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800">
                            Sign In
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )

    return (
        <>
        {showSignupForm()}

        </>
    );
};

export default SignUp;
