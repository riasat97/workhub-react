const addToDb=(id,jobTitle)=>{
    let appliedJobs= getAllAppliedJobs();
    appliedJobs[id]=jobTitle;
    localStorage.setItem('applied-jobs',JSON.stringify(appliedJobs));
}
const getAllAppliedJobs= ()=>{
    let appliedJobs={};
    const storedAppliedJobs= localStorage.getItem('applied-jobs');
    if(storedAppliedJobs){
        appliedJobs=JSON.parse(storedAppliedJobs);
    }
    return appliedJobs;
};

export {addToDb,getAllAppliedJobs}