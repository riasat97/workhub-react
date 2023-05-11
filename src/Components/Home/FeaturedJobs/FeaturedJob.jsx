import React from 'react';
import frame from '/assets/Icons/Frame.png'
import frame4 from '/assets/Icons/Frame-4.png'
import { Link } from 'react-router-dom';
const FeaturedJob = ({ featuredJob, page }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrParttime, salaryRangePerMonth } = featuredJob;
    const splitedAddress = location.split(',');
    const address = splitedAddress[splitedAddress.length - 2] + ', ' + splitedAddress[splitedAddress.length - 1];
    return (
        <div className='border-2 border-[#E8E8E8] rounded-lg w-full p-10'>
            {page === 'featuredJobs' ?
                <div>
                    <img className='w-28 h-10' src={companyLogo} alt="" />
                    <h3 className='text-darkis font-extrabold text-2xl mt-8 mb-2'>{jobTitle}</h3>
                    <p className=' text-secondary text-xl font-semibold'>{companyName}</p>
                    <div className='flex gap-4 my-8'>
                        <button className='flex justify-center items-center border-primary border-2 rounded-lg w-28 h-10 py-5 px-3 text-primary font-extrabold '>{remoteOrOnsite}</button>
                        <button className='flex justify-center items-center border-primary border-2 rounded-lg w-28 h-10 py-5 px-3 text-primary font-extrabold'>{fulltimeOrParttime}</button>
                    </div>
                    <div className='flex gap-6 mb-6 text-secondary'>
                        <div className='flex justify-center items-center gap-2'>
                            <img src={frame4} alt="" />
                            <p>{address}</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img className='' src={frame} alt="" />
                            <p> Salary : {salaryRangePerMonth}K</p>
                        </div>
                    </div>
                    <Link to={`/jobs/${id}`}>
                        <button className='bg-btn rounded-md w-40 h-12 py-3 px-5 text-white font-extrabold text-lg'>View Details</button>
                    </Link>
                </div>
                : <div className='md:flex justify-between items-center'>
                    <div className='md:flex justify-center items-center gap-8'>
                        <div className='bg-[#F4F4F4] rounded-lg py-24 px-11'>
                            <img className='w-28 h-10 ' src={companyLogo} alt="" />
                        </div>
                        <div>
                            <h3 className='text-darkis font-extrabold text-2xl mt-8 mb-2'>{jobTitle}</h3>
                            <p className=' text-secondary text-xl font-semibold'>{companyName}</p>
                            <div className='flex gap-4 my-8'>
                                <button className='flex justify-center items-center border-primary border-2 rounded-lg w-28 h-10 py-5 px-3 text-primary font-extrabold '>{remoteOrOnsite}</button>
                                <button className='flex justify-center items-center border-primary border-2 rounded-lg w-28 h-10 py-5 px-3 text-primary font-extrabold'>{fulltimeOrParttime}</button>
                            </div>
                            <div className='flex gap-6 mb-6 text-secondary'>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={frame4} alt="" />
                                    <p>{address}</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <img className='' src={frame} alt="" />
                                    <p> Salary : {salaryRangePerMonth}K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/jobs/${id}`}>
                        <button className='bg-btn rounded-md w-40 h-12 py-3 px-5 text-white font-extrabold text-lg'>View Details</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default FeaturedJob;