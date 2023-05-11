import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <nav className='p-5 md:flex justify-between items-center md:pt-5'>
            <h3 className='text-3xl text-[#1A1919] font-extrabold'>Work<span className='text-primary'>Hub</span></h3>
            <ul className='md:flex gap-8'>
                <li className='text-secondary font-medium'><ActiveLink to="/">Home</ActiveLink> </li>
                <li className='text-secondary font-medium'><ActiveLink to="/statistics">Statistics</ActiveLink> </li>
                <li className='text-secondary font-medium'><ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink> </li>
                <li className='text-secondary font-medium'><ActiveLink to="/blog">Blog</ActiveLink> </li>
            </ul>
            <button className='hidden md:block bg-btn rounded-lg w-48 h-16 py-5 px-7 text-white font-extrabold text-lg'>Start Applying</button>    
        </nav>
    );
};

export default Header;