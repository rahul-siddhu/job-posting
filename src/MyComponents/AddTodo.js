import React, { useState, useRef } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // Create a ref for the job list section
    const jobsSectionRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    };

    // Scroll down function
    const handleScrollToJobs = () => {
        if (jobsSectionRef.current) {
            jobsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container my-4 p-4 rounded shadow-sm" style={{ maxWidth: '600px', backgroundColor: '#f9f9f9' }}>
            <h3 className="text-center mb-4">Add a New Job</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Job Title</strong></label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter the job title" 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="desc" className="form-label"><strong>Job Description</strong></label>
                    <textarea 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control" 
                        id="desc" 
                        placeholder="Enter the job description" 
                        rows="4"
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success btn-block">Add Job</button>
                    <button 
                        type="button" 
                        className="btn btn-info btn-block" 
                        onClick={handleScrollToJobs}
                    >
                        View All Jobs
                    </button>
                </div>
            </form>

            {/* Dummy job section for the "View All Jobs" button to scroll to */}
            <div ref={jobsSectionRef} style={{ marginTop: '100px' }}>
            </div>
        </div>
    );
};
