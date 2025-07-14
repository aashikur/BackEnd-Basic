import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);

  
  const {
    _id,
    title,
    location,
    jobType,
    company,
    category,
    company_logo,
    salaryRange,
    applicationDeadline,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    status
  } = job;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-5 md:px-10 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-blue-900 dark:to-gray-800 p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src={company_logo}
            alt={company}
            className="w-24 h-24 rounded-md bg-white p-1 shadow-md object-contain"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-blue-800 dark:text-blue-300">{title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{company}</p>
            <p className="text-sm mt-1 italic text-gray-500">{location} · {jobType}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-1">Job Description</h2>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-1">Responsibilities</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                {responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-1">Requirements</h2>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                {requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT / SIDEBAR */}
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border border-blue-100 dark:border-gray-700 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Category</h3>
              <p className="text-base font-semibold">{category}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
              <p className="text-base font-semibold">
                {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Application Deadline</h3>
              <p className="text-base">{applicationDeadline}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">HR Contact</h3>
              <p className="font-medium">{hr_name}</p>
              <p className="text-sm text-blue-600 dark:text-blue-300">{hr_email}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <span className={`inline-block px-3 py-1 text-xs rounded-full font-medium 
                ${status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-800/10 dark:text-green-300' :
                  'bg-red-100 text-red-700 dark:bg-red-800/10 dark:text-red-300'}`}>
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Apply Button */}
        <div className="flex justify-end bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6">
          <Link to={`/apply-job/${_id}`} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium text-sm shadow-md">
            🚀 Apply Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;