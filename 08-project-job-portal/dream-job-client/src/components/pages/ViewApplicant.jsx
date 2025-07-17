import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const ViewApplicant = () => {
    const applicants = useLoaderData();
    const params = useParams();
    const [job, setJob] = useState(null);
    const [actions, setActions] = useState({});

    // Fetch job details using JobID from applicants
    useEffect(() => {
        if (applicants.length > 0) {
            const jobId = applicants[0].JobID;
            fetch(`http://localhost:3000/jobs-details/${jobId}`)
                .then(res => res.json())
                .then(data => setJob(data));
        }
    }, [applicants]);

    const handleAction = (id, action) => {
        setActions(prev => ({ ...prev, [id]: action }));
        // You can add backend call here if needed
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-2 text-blue-700">
                View Applicants of <span className="text-gray-800">{job ? job.title : '...'}</span>
            </h1>
            <p className="mb-6 text-gray-600">
                Total Applicants: <span className="font-semibold">{applicants.length}</span>
            </p>
            {applicants.length === 0 ? (
                <div className="text-center text-gray-500">No applicants for this job yet.</div>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Email</th>
                                <th className="py-2 px-4 text-left">Resume</th>
                                <th className="py-2 px-4 text-left">Cover Letter</th>
                                <th className="py-2 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map(app => (
                                <tr key={app._id} className="border-b hover:bg-blue-50">
                                    <td className="py-2 px-4">{app.fullName}</td>
                                    <td className="py-2 px-4">{app.email}</td>
                                    <td className="py-2 px-4">
                                        <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View</a>
                                    </td>
                                    <td className="py-2 px-4">{app.coverLetter}</td>
                                    <td className="py-2 px-4">
                                        <select
                                            className="border rounded px-2 py-1"
                                            value={actions[app._id] || ""}
                                            onChange={e => handleAction(app._id, e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="hire">Hire</option>
                                            <option value="cancel">Cancel</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ViewApplicant;