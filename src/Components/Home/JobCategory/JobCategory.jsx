import React from 'react';

const JobCategory = ({ category}) => {
    const {logo,name,jobsAvailable}=category;
    return (
        <div className='bg-category rounded-lg w-64 p-8'>
            <div className='bg-icon  w-16 h-16 flex justify-center items-center'> <img className='p-1 w-10 h-10 text-primary' src={logo} alt="" /></div>
            <h3 className='mt-8 mb-2 font-extrabold text-xl'>{name}</h3>
            <p className='text-secondary font-medium '>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default JobCategory;