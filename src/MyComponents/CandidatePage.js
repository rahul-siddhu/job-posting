import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const CandidatePage = ({ todos }) => {

    const { sno } = useParams();  // Get the sno from the URL
    const jobNumber=Number(sno)+1;

    // Find the job with the matching sno
    const todo = todos.find(todo => todo.sno === parseInt(sno));

    // If no job found, display an error message
    if (!todo) {
        return <div className="container my-5">Job not found!</div>;
    }

    // Get the candidates assigned to the job
    const assignedCandidates = todo.candidates || [];

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">Candidates for Job {jobNumber}</h3>
            {assignedCandidates.length > 0 ? (
                <div className="row">
                    {assignedCandidates.map((candidate) => (
                        <div key={candidate.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to={`/candidate/${candidate.id}`} className="text-decoration-none">
                                            {candidate.name}
                                        </Link>
                                    </h5>
                                    <p className="card-text">
                                        <strong>Application Date:</strong> {new Date(candidate.applicationDate).toLocaleDateString()}
                                    </p>
                                    <p className="card-text">
                                        <strong>Status:</strong> {candidate.status}
                                    </p>
                                    <a href={candidate.resumeLink} download className="btn btn-outline-primary mt-2">
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-info text-center" role="alert" style={{ borderRadius: '8px' }}>
                    <p className="mb-0">No candidates applied for this job.</p>
                </div>

            )}
        </div>
    );
};
