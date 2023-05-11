import React from 'react';
import footerLogo from '/assets/Icons/Group 9969.png'
const Footer = () => {
    return (
        <div className='bg-black py-32 px-32 md:px-44 flex flex-col md:flex-row gap-10 md:gap-28'>
            <div>
                <h3 className='text-white font-extrabold text-3xl'>WorkHub</h3>
                <p className='my-5 text-slate-400 w-48'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img src={footerLogo} alt="" />
            </div>
            <div className=''>
                <h3 className='text-white font-semibold text-xl mb-3'>Company</h3>
                <ul className='text-slate-400 flex flex-col gap-4 w-32'>
                    <li>About Us</li>
                    <li>Work</li>
                    <li>Latest News</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className=''>
            <h3 className='text-white font-semibold text-xl mb-3'>Product</h3>
                <ul className='text-slate-400 flex flex-col gap-4 w-32'>
                    <li>Prototype</li>
                    <li>Plans & Pricing</li>
                    <li>Customers</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div className=''>
            <h3 className='text-white font-semibold text-xl mb-3'>Support</h3>
                <ul className='text-slate-400 flex flex-col gap-4 w-32'>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a partner</li>
                    <li>Developers</li>
                </ul>
            </div>
            <div className=''>
            <h3 className='text-white font-semibold text-xl mb-3'>Company</h3>
                <ul className='text-slate-400 flex flex-col gap-4 w-40'>
                    <li>524 Broadway , NYC</li>
                    <li>+1 777 - 978 - 5570</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;