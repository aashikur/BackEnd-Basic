import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const ApplyJob = () => {
  const JobID = useParams().id;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resumeLink: '',
    coverLetter: '',
  });
  const { user } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const UpdateApplicationData = { ...formData, JobID, email: user.email };
      fetch(`http://localhost:3000/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(UpdateApplicationData),
      })
        .then((response) => response.json())
        .then((data) => {
          // handle success
        })
        .catch((error) => {
          // handle error
        });

      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 px-4 py-10 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl w-full transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Apply for Job{' '}
          <span className="text-blue-500 dark:text-blue-400">
            <Link to={`/job-details/${JobID}`}>Job Details</Link>
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed dark:bg-gray-900 dark:text-gray-100"
              placeholder="john@example.com"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Resume Link
            </label>
            <input
              type="url"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
              placeholder="https://your-resume-link.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md mt-1 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;