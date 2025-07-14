import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    company,
    company_logo,
    salaryRange,
    category,
    applicationDeadline
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-200">
      <figure className="bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-4 aspect-video ">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-contain"
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm">
          <strong>Location:</strong> {location}
        </p>
        <p className="text-sm">
          <strong>Job Type:</strong> {jobType}
        </p>
        <p className="text-sm">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm">
          <strong>Salary:</strong> {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
        </p>
        <p className="text-sm">
          <strong>Deadline:</strong> {applicationDeadline}
        </p>

        <div className="card-actions justify-end pt-4">
          <Link to={`/job-details/${job._id}`} className="btn btn-primary btn-sm">View Job</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;