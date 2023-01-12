import React from 'react';


export const showLoading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500"></div>
        </div>
    );
}
