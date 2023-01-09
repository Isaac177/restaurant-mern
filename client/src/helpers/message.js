import React from 'react';


export const showErrorMessage = msg => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{msg}</span>
        </div>
    );
}

export const showSuccessMessage = msg => {
    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{msg}</span>
        </div>
    );
}