import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {isAuthenticated, logout} from "../helpers/auth";


const Header = () => {
    const [navShown, setNavShown] = useState(false);
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    let navigate = useNavigate();

    useEffect(() => {
        setIsAuth(isAuthenticated());
    }, []);

    const toggleNav = () => setNavShown(!navShown);

    const handleLogout = evt => {
        logout(() => {
            navigate('/signin');
        });
        setIsAuth(!isAuthenticated());
    }

    const showNavigation = () => (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/' className="font-semibold text-xl tracking-tight">RestApp</Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    onClick={toggleNav}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                { navShown && (
                    <div className="text-sm lg:flex-grow block items-center w-full lg:w-auto">
                        <Link to="/signin" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Sign In
                        </Link>
                        <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-sm lg:flex-grow block items-center w-full lg:w-auto sm:block sm:hidden">
                <div className="text-sm lg:flex-grow float-right ml-auto">
                    {isAuth ? (
                        <>
                            <Link to="/signin" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Sign In
                            </Link>
                            <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                Sign Up
                            </Link>
                        </>
                        ) : (
                        <>
                            {isAuth.role === 0 ? (
                                <>
                                    <Link to="/user/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                        User Dashboard
                                    </Link>
                                    <button
                                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                        onClick={handleLogout}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/admin/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                        Admin Dashboard
                                    </Link>
                                    <button
                                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                        onClick={handleLogout}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );

    return (
        <header id="header">
            {showNavigation()}
        </header>
    );
};

export default Header;
