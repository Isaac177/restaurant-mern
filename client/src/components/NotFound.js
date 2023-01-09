import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-6xl font-bold text-red-700">404</h1>
                <h2 className="text-3xl font-bold text-gray-600">Page Not Found</h2>
                <p className="text-xl font-light text-gray-600 mt-4">
                    The page you are looking for could not be found.
                </p>
                <button
                    className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full mt-6 hover:bg-blue-700"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
