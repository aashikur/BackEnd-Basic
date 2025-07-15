import React from 'react';
import { useLoaderData } from 'react-router';

const MyApplicationsPage = () => {
    const myApplications = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">My Applications</h1>

            {myApplications.length === 0 ? (
                <p className="text-center text-gray-500">No applications found.</p>
            ) : (
                <div className="space-y-6">
                    {myApplications.map(app => {
                        // Destructure application and job details
                        const {
                            fullName,
                            email,
                            resumeLink,
                            coverLetter,
                            jobDetails
                        } = app;

                        // Destructure job details
                        const {
                            title,
                            location,
                            jobType,
                            category,
                            applicationDeadline,
                            salaryRange,
                            description,
                            company,
                            requirements,
                            responsibilities,
                            company_logo,
                            hr_name,
                            hr_email
                        } = jobDetails || {};

                        return (
                            <div
                                key={app._id}
                                className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6"
                            >
                                {/* Job Info */}
                                {jobDetails ? (
                                    <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3">
                                        <img
                                            src={company_logo}
                                            alt={company}
                                            className="w-20 h-20 object-contain mb-2"
                                        />
                                        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                                        <p className="text-gray-600">{company}</p>
                                        <p className="text-gray-500 text-sm">{location} • {jobType}</p>
                                        <p className="text-gray-500 text-sm mb-2">
                                            <span className="font-medium">Category:</span> {category}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            <span className="font-medium">Salary:</span> {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            <span className="font-medium">Deadline:</span> {applicationDeadline}
                                        </p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            <span className="font-medium">HR:</span> {hr_name} ({hr_email})
                                        </p>
                                    </div>
                                ) : (
                                    <div className="w-full md:w-1/3 flex items-center justify-center text-red-500">
                                        Job info not found.
                                    </div>
                                )}

                                {/* Application Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-1">{fullName}</h3>
                                    <p className="text-gray-600 text-sm mb-1">
                                        <span className="font-medium text-gray-700">Email:</span> {email}
                                    </p>
                                    <p className="text-sm mb-1">
                                        <span className="font-medium text-gray-700">Resume:</span>{' '}
                                        <a
                                            href={resumeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline hover:text-blue-800"
                                        >
                                            View Resume
                                        </a>
                                    </p>
                                    <div className="mt-4 text-gray-700">
                                        <p className="font-medium">Cover Letter:</p>
                                        <p className="mt-1">{coverLetter}</p>
                                    </div>
                                    {jobDetails && (
                                        <>
                                            <div className="mt-4">
                                                <p className="font-medium text-gray-700">Job Description:</p>
                                                <p className="text-gray-600">{description}</p>
                                            </div>
                                            <div className="mt-4 flex flex-col md:flex-row gap-4">
                                                <div>
                                                    <p className="font-medium text-gray-700">Requirements:</p>
                                                    <ul className="list-disc list-inside text-gray-600">
                                                        {requirements?.map((req, idx) => (
                                                            <li key={idx}>{req}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">Responsibilities:</p>
                                                    <ul className="list-disc list-inside text-gray-600">
                                                        {responsibilities?.map((res, idx) => (
                                                            <li key={idx}>{res}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyApplicationsPage;