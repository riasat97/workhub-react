import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
// import googleLogo from '../../assets/Logo/google-1-1 1-1.png'
// import frame from '../../assets/Icons/Frame.png'
// import frame4 from '../../assets/Icons/Frame-4.png'
 import FeaturedJob from './FeaturedJob';
const FeaturedJobs = ({featuredJobs,handleSeeAllJobs,handleSeeLessJobs}) => {
    const [hidden,setHidden]=useState(false);
    return (
        <div className='flex flex-col  py-28'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-center'>Featured Jobs</h1>
            <p className='font-medium text-secondary mt-4 mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-6 mx-8'>
                {
                      featuredJobs.map((featuredJob,idx)=><FeaturedJob featuredJob={featuredJob} key={idx} handleSeeAllJobs={handleSeeAllJobs} page={'featuredJobs'}></FeaturedJob>)
                }
            </div>
            {!hidden ? 
            <button onClick={()=>{handleSeeAllJobs();setHidden(true)}} className='mx-auto bg-btn rounded-lg w-44 h-16 py-5 px-7 text-white font-extrabold text-lg mt-10 mb-8'>See All Jobs</button>
            : <button onClick={()=>{handleSeeLessJobs();setHidden(false)}} className='mx-auto bg-btn rounded-lg w-44 h-16 py-5 px-7 text-white font-extrabold text-lg mt-10 mb-8'>See Less Jobs</button>}
        </div>
    );
};

export default FeaturedJobs;