import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <h1 className='text-7xl font-extrabold '>404</h1>
            <h3 className='text-5xl font-bold'>Page Not Found</h3>
        </div>
    );
};

export default NotFound;