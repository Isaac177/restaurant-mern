import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
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
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
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
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default SignIn;
