import axios from 'axios';
import React, { useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const MyPostedJobs = () => {
  const { user } = React.useContext(AuthContext);
  const [postedJobs, setPostedJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs?email=${user.email}`)
      .then((data) => setPostedJobs(data.data))
      .finally(() => setLoading(false));
  }, [user.email]);
  console.log(postedJobs)

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          My Posted Jobs
        </h1>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : postedJobs.length === 0 ? (
          <div className="text-center text-gray-500">No jobs posted yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postedJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">{job.title}</h2>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">HR Email:</span> {job.hr_email}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Location:</span> {job.location}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Type:</span> {job.jobType}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Status:</span> {job.status}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Deadline:</span> {job.applicationDeadline}
                  </p>
                </div>
                {job.company_logo && (
                  <img
                    src={job.company_logo}
                    alt="Company Logo"
                    className="mt-4 h-12 w-12 object-contain rounded"
                  />
                )}
                <Link className='btn btn-outline' to={`/view-applicant/${job._id}`} >View Applicant</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostedJobs;