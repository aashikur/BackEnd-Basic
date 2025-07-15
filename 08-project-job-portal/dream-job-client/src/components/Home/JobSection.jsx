import React, { Suspense } from 'react';
import JobCard from './JobCard';
import ScrollToTop from '../ui/ScrollToTop';
// import JobCard from './JobCard';

// Lazy load JobCard component
// const JobCard = React.lazy(() => import('./JobCard'));


const JobSection = () => {
    const [jobsData, setJobsData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobsData(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-40">
            <h1 className="text-3xl text-center">ALL JOB LIST</h1>

            {/* Wrap list in Suspense */}

                {/* <Suspense fallback={<div className="flex justify-center"> <span className="loading loading-spinner text-info py-15"></span>
                </div>}> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                    {jobsData.map(job => (
                        <JobCard key={job._id} job={job} />
                    ))}
            </div>
                {/* </Suspense> */}
                <ScrollToTop/>
        </div>
    );
};

export default JobSection;