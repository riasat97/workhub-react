import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import vector from '/assets/All Images/Vector.png'
import { addToDb, getAllAppliedJobs } from '../../utilities/localDb';
import phoneIcon from '/assets/Icons/phone.png'
import emailIcon from '/assets/Icons/email.png'
import addressIcon from '/assets/Icons/Frame-4.png'
import jobTitleIcon from '/assets/Icons/job-title.png'
import salaryIcon from '/assets/Icons/Frame.png'
import { alertSuccess, alertWarning, isEmpty } from '../../utilities/alert';


const JobDetails = () => {
    const { jobDescription, jobResponsibility, educationalRequirements, experienceInYears, contactInformation, salaryRangePerMonth, fulltimeOrParttime, id, companyLogo, jobTitle, companyName, remoteOrOnsite, location } = useLoaderData();

    const applyNow=()=>{
        addToDb(id, jobTitle);
        alertSuccess('You have successfully applied to this job!!!')
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const isIdExists=()=>{
        const allAppliedJobs = getAllAppliedJobs();
        let idExists = false
        for (const idx in allAppliedJobs) {
            if (parseInt(idx) === id) {
                idExists = true;
            }
        }
        return idExists;
    }
    const handleApplyNow = () => {
        const allAppliedJobs = getAllAppliedJobs();
        
        if (isEmpty(allAppliedJobs)) {
            applyNow();
        }
        else {
            if (isIdExists()) {
                alertWarning('You have already applied to this job!!!')
            } else {
                applyNow();
            }
        }

    }
    return (
        <div>
            <div className="p-5 md:flex flex-start justify-start items-baseline gap-64 pt-8 pb-8">
                <img className='w-52 h-42' src={vector} alt="" />
                <h1 className='text-3xl font-extrabold'>Job Details</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-16 bg-white py-10 px-12'>
                <div className='w-3/5'>
                    <p className="text-secondary"><span className='font-extrabold text-black'>Job Description: </span>{jobDescription}</p>
                    <p className="text-secondary my-6"><span className='font-extrabold text-black'>Job Responsibility: </span>{jobResponsibility}</p>
                    <p className="text-secondary mb-6 flex flex-col gap-4"><span className='font-extrabold text-black'>Educational Requirements: </span>{educationalRequirements}</p>
                    <p className="text-secondary  flex flex-col gap-4"><span className='font-extrabold text-black'>Experiences: </span>{experienceInYears} years  in this field.</p>
                </div>
                <div>
                    <div className='bg-banner rounded-lg p-7'>
                        <div>
                            <h3 className='font-extrabold text-xl mb-4'>Job Details</h3>
                            <hr className='' />
                            <div className='flex flex-col mt-4 gap-4'>
                                <div className='flex items-center gap-2'>
                                    <img src={salaryIcon} alt="" />
                                    <div className=''><span className='font-extrabold'>Salary: </span>{salaryRangePerMonth}k (Per Month)</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={jobTitleIcon} alt="" />
                                    <div className=''><span className='font-extrabold'>Job Title: </span>{jobTitle}</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-extrabold text-xl mb-4'>Contact Information</h3>
                            <hr />
                            <div className='flex flex-col mt-4 gap-4'>
                                <div className='flex items-center gap-2'>
                                    <img src={phoneIcon} alt="" />
                                    <p className=''><span className='font-extrabold'>Phone: </span>{contactInformation.phone}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={emailIcon} alt="" />
                                    <p className=''><span className='font-extrabold'>Email: </span>{contactInformation.email}</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img src={addressIcon} alt="" />
                                    <p className=''><span className='font-extrabold'>Address: </span>{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleApplyNow} className='bg-btn text-white text-xl font-extrabold rounded-lg w-full py-5 px-30 mt-6'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;