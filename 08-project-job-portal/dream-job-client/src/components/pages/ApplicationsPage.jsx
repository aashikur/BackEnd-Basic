import React from 'react';
import { useLoaderData } from 'react-router';

const ApplicationsPage = () => {
  const theApplications = useLoaderData();
  console.log(theApplications);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Applications</h1>

      {theApplications.length === 0 ? (
        <p className="text-gray-500">No applications found.</p>
      ) : (
        <div className="grid gap-6">
          {theApplications.map((a, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">{a.fullName}</h2>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Email:</span> {a.email}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Job ID:</span> {a.JobID}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Resume:</span>{' '}
                <a href={a.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View Resume
                </a>
              </p>
              <p className="mt-4 text-gray-700 whitespace-pre-line">
                <span className="font-medium">Cover Letter:</span> {a.coverLetter}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
