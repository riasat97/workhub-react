import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalculator,faLightbulb,faBullhorn,faMicrochip } from '@fortawesome/free-solid-svg-icons'
// import account1 from '../../assets/Icons/accounts 1.png' 
// import business1 from "../../assets/Icons/business 1.png" 
// import socialMedia1 from "../../assets/Icons/social-media 1.png"
// import chip1 from "../../assets/Icons/chip 1.png" 
import JobCategory from './JobCategory';
const JobCategoryList = ({ categoryList }) => {
    //console.log(categoryList);
    return (
        <div className='flex flex-col justify-center items-center p-5 md:pt-8'>
            <h1 className='text-4xl md:text-5xl font-extrabold'>Job Cateogry List</h1>
            <p className='font-medium text-secondary mt-4 mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex flex-col md:flex-row gap-5'>
                {
                    categoryList.map((category, idx) => <JobCategory category={category} key={idx}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;