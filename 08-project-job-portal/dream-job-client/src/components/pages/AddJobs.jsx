import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


const initialState = {
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationDeadline: '',
    salaryRange: {
        min: '',
        max: '',
        currency: 'bdt',
    },
    description: '',
    company: '',
    requirements: '',
    responsibilities: '',
    status: 'active',
    hr_email: '',
    hr_name: '',
    company_logo: '',
};

const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const [form, setForm] = useState(initialState);

    // Handle simple fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('salaryRange.')) {
            const key = name.split('.')[1];
            setForm((prev) => ({
                ...prev,
                salaryRange: { ...prev.salaryRange, [key]: value },
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Handle array fields (requirements, responsibilities)
    
    // Handle form submit (for now, just log the data)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert min/max salary to numbers
        const data = {
            ...form,
            requirements: form.requirements.split(' ').map(item => item.trim()).filter(Boolean),
            responsibilities: form.responsibilities.split(' ').map(item => item.trim()).filter(Boolean),
            salaryRange: {
                ...form.salaryRange,
                min: Number(form.salaryRange.min),
                max: Number(form.salaryRange.max),
            },
        };

        // send data to jobs server
        axios.post('http://localhost:3000/jobs', data).then(data => console.log('after post axios', data.data)).catch(err => console.log(err))
        console.log(data);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-6">Add Job</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Title */}
                <div>
                    <label className="block font-medium">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Job Type */}
                <div>
                    <label className="block font-medium">Job Type</label>
                    <select
                        name="jobType"
                        value={form.jobType}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Application Deadline */}
                <div>
                    <label className="block font-medium">Application Deadline</label>
                    <input
                        type="date"
                        name="applicationDeadline"
                        value={form.applicationDeadline}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Salary Range */}
                <div className="flex gap-2">
                    <div className="flex-1">
                        <label className="block font-medium">Salary Min</label>
                        <input
                            type="number"
                            name="salaryRange.min"
                            value={form.salaryRange.min}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-medium">Salary Max</label>
                        <input
                            type="number"
                            name="salaryRange.max"
                            value={form.salaryRange.max}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block font-medium">Currency</label>
                        <input
                            type="text"
                            name="salaryRange.currency"
                            value={form.salaryRange.currency}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        rows={3}
                        required
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="block font-medium">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                {/* Requirements */}
                <div>
                    <label className="block font-medium">Requirements (comma separated)</label>
                    <input
                        type="text"
                        name="requirements"
                        value={form.requirements}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="e.g. html, js, css"
                    />
                </div>

                {/* Responsibilities */}
                <div>
                    <label className="block font-medium">Responsibilities (comma separated)</label>
                    <input
                        type="text"
                        name="responsibilities"
                        value={form.responsibilities}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="e.g. Teamwork, Communication"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block font-medium">Status</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="active">Active</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>

                {/* HR Email */}
                <div>
                    <label className="block font-medium">HR Email</label>
                    <input
                        type="email"
                        name="hr_email"
                        defaultValue={user.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* HR Name */}
                <div>
                    <label className="block font-medium">HR Name</label>
                    <input
                        type="text"
                        name="hr_name"
                        value={form.hr_name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                {/* Company Logo */}
                <div>
                    <label className="block font-medium">Company Logo URL</label>
                    <input
                        type="url"
                        name="company_logo"
                        value={form.company_logo}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700"
                >
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJobs;