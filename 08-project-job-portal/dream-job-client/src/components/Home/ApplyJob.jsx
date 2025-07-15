import React, { useState } from 'react';
import JobDetails from './JobDetails';
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const ApplyJob = () => {
  const JobID = useParams().id;
  // console.log(JobID)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resumeLink: '',
    coverLetter: '',
  });
  const {user} = useContext(AuthContext);
  // console.log(user)

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

    // Simulate network delay
    setTimeout(() => {
      const UpdateApplicationData = {...formData, JobID, email: user.email};
      console.log('Form submitted:', UpdateApplicationData );
      // alert('Application Submitted Successfully ✅');


      fetch(`http://localhost:3000/applications`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(UpdateApplicationData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setSubmitting(false);

    }, 1500);
  };


  return (
   <div> 
     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
        
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apply for Job <span className='text-blue-500'><Link to={`/job-details/${JobID}`}>Job Details</Link></span></h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">Email</label>
            <input
              type="email"
              name="email"
              required
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500 opacity-60 cursor-not-allowed"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Resume Link</label>
            <input
              type="url"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="https://your-resume-link.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              name="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
    
   </div>
  );
};

export default ApplyJob;