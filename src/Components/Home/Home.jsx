import React, { useEffect, useState } from 'react';
import Banner from '/assets/All Images/dev.png'
import './Home.css'
import JobCategoryList from './JobCategory/JobCategoryList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import {  jobs } from '../loaders/dataLoader';
const Home = () => {
    const categoryList= useLoaderData();
    const [featuredJobList,setFeaturedJobList]=useState([]);
    const [jobList,setJobList]=useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch('/jobs.json');
            const json = await data.json();
            setFeaturedJobList(json.slice(0,4));
            setJobList(json);
          }
          fetchData()
            .catch(console.error);
    },[]);
    const handleSeeAllJobs=()=>{
        return setFeaturedJobList(jobList);
    }
    const handleSeeLessJobs=()=>{
        return setFeaturedJobList(jobList.slice(0,4));
    }
    return (
        <div>
            <div className='p-5 md:flex justify-between items-center gap-14 '>
                <div className='md:flex flex-col justify-start'>
                    <h1 className='font-extrabold text-4xl md:text-7xl text-start'>One Step Closer To Your <span className='text-primary'>Dream Job</span> </h1>
                    <p className='text-start text-secondary text-base md:text-lg font-medium mt-6 mb-8'> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish. </p>
                    <button className='bg-btn rounded-lg w-48 h-16 py-5 px-7 text-white font-extrabold text-lg'>Get Started</button>
                </div>
                <img className=' hidden md:block' src={Banner} alt="" />
            </div>
            <div className='bg-white'>
                <JobCategoryList categoryList={categoryList}></JobCategoryList>
                <FeaturedJobs featuredJobs={featuredJobList} handleSeeAllJobs={handleSeeAllJobs} handleSeeLessJobs={handleSeeLessJobs}></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;