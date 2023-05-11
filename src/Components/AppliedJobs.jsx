import React, { useEffect, useState } from 'react';
import vector from '/assets/All Images/Vector.png'
import { getAllAppliedJobs } from './utilities/localDb';
import { isEmpty } from './utilities/alert';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedJob from './Home/FeaturedJobs/FeaturedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [jobType, setJobType]= useState('');

    useEffect(() => {
        const storedAppliedJobs= savedJobs();
        setAppliedJobs(storedAppliedJobs);
    }, [])
    const savedJobs=()=>{
        const storedAppliedJobs = [];
        const allAppliedJobs = getAllAppliedJobs();
        if (!isEmpty(allAppliedJobs)) {
            for (const idx in allAppliedJobs) {
                const job = jobs.find(job => job.id === parseInt(idx));
                if (!isEmpty(job))
                    storedAppliedJobs.push(job);
            }
        }
        return storedAppliedJobs;
    }
    const handleDropdownChange = (event) => {
        const selectedJobType= event.target.value
        setJobType(selectedJobType);
        const filteredJobs= savedJobs().filter(appliedJob=>{
            if(event.target.value==='')return appliedJob
            return appliedJob.remoteOrOnsite === selectedJobType
        });
        setAppliedJobs(filteredJobs);
      }

    return (
        <div>
            <div className="p-5 md:flex justify-start items-baseline gap-64 pt-8 pb-8">
                <img className='w-52 h-42' src={vector} alt="" />
                <h1 className='text-3xl font-extrabold'>Applied Jobs</h1>
            </div>
            <div className=' bg-white py-10 px-12'>
                <div className='md:flex justify-end'>
                    <select value={jobType} onChange={handleDropdownChange} name="remoteOrOnsite" id="remoteOrOnsite" className='rounded-lg p-3 bg-[#F4F4F4] text-xl font-semibold'>
                        <option value="">Filter By</option>
                        <option value="Onsite">On-site</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-6  mt-8'>
                    {
                        (appliedJobs.length)?appliedJobs.map(appliedJob=><FeaturedJob featuredJob={appliedJob} key={appliedJob.id} page={'appliedJobs'}></FeaturedJob>): <div className='text-center text-red-900 text-3xl font-extrabold my-2'>You have not applied to a {jobType} job yet!!!</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;