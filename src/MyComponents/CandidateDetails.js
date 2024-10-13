import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const CandidateDetails = ({ candidates }) => {
    const { id } = useParams(); // Get the candidate ID from the URL params

    // Find the candidate by ID
    const candidate = candidates.find(candidate => candidate.id === parseInt(id));

    const [status, setStatus] = useState(candidate ? candidate.status : "");

    if (!candidate) {
        // If the candidate is not found, display an error message
        return <div className="alert alert-danger mt-5">Candidate not found</div>;
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        // You could trigger an API call to update the status here
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm p-4">
                        <h3 className="card-title text-center">{candidate.name}'s Profile</h3>
                        <div className="card-body">
                            <div className="mb-3">
                                <p><strong>Email:</strong> {candidate.email}</p>
                                <p><strong>Contact:</strong> {candidate.contact}</p>
                                <p><strong>Skills:</strong> {candidate.skills.join(', ')}</p>
                                <p><strong>Experience:</strong> {candidate.experience} years</p>
                            </div>

                            <h4 className="mt-4">Resume</h4>
                            <a href={candidate.resumeLink} download className="btn btn-outline-primary btn-sm mt-2">
                                Download Resume
                            </a>

                            <h4 className="mt-4">Update Status</h4>
                            <div className="form-group">
                                <select 
                                    className="form-select" 
                                    value={status} 
                                    onChange={handleStatusChange}
                                >
                                    <option value="Under Review">Under Review</option>
                                    <option value="Interview Scheduled">Interview Scheduled</option>
                                    <option value="Hired">Hired</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>

                            <div className="mt-3">
                                <p><strong>Current Status:</strong> {status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
