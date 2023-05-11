const categoryList=async()=>{
    const loadCategoryList= await fetch('/category.json');
    const categoryList= await loadCategoryList.json();
    return categoryList;
}
const jobs=async()=>{
    const loadJobs= await fetch('/jobs.json');
    const jobs= await loadJobs.json();
    return jobs;
}
const loadJobDetails=async(jobId)=>{
    const loadJobs= await fetch('/jobs.json');
    const jobs= await loadJobs.json();
   // console.log(jobs);
    const details=jobs.find(job=>job.id===parseInt(jobId));
    return details;
}

export  {categoryList,jobs,loadJobDetails};