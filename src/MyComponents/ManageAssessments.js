import React, { useState, useEffect } from 'react';

export const ManageAssessments = ({ todos }) => {
    const [selectedJob, setSelectedJob] = useState('');
    const [jobQuestions, setJobQuestions] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [backupQuestions, setBackupQuestions] = useState([]);

    // Load questions from localStorage when the component mounts
    useEffect(() => {
        const storedJobQuestions = JSON.parse(localStorage.getItem('jobQuestions')) || {};
        setJobQuestions(storedJobQuestions);
    }, []);

    // Save questions to localStorage whenever they are updated
    useEffect(() => {
        localStorage.setItem('jobQuestions', JSON.stringify(jobQuestions));
    }, [jobQuestions]);

    const handleJobChange = (e) => {
        const jobId = e.target.value;
        setSelectedJob(jobId);
        setQuestions(jobQuestions[jobId] || []);
        setIsEditing(false);
    };

    const handleQuestionChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex, optionIndex, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[optionIndex] = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = event.target.value;
        setQuestions(updatedQuestions);
    };

    const addNewQuestion = () => {
        const newQuestions = [...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }];
        setQuestions(newQuestions);
    };

    const deleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(updatedQuestions);
    };

    const toggleEditMode = () => {
        if (isEditing) {
            // Cancel edit: restore the original questions
            setQuestions([...backupQuestions]);
        } else {
            // Enter edit mode: backup the current questions
            setBackupQuestions([...questions]);
        }
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save changes to jobQuestions
        const updatedJobQuestions = {
            ...jobQuestions,
            [selectedJob]: questions
        };
        setJobQuestions(updatedJobQuestions);
        setIsEditing(false);
        alert('Assessment saved successfully!');
    };

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">Manage Assessments</h3>

            {/* Job Selection Dropdown */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="jobSelect" className="form-label">Select a Job:</label>
                    <select
                        id="jobSelect"
                        className="form-select"
                        value={selectedJob}
                        onChange={handleJobChange}
                        required
                    >
                        <option value="">Select a job</option>
                        {todos.map((job) => (
                            <option key={job.sno} value={job.sno}>
                                {job.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message for No Job Selected */}
                {!selectedJob && (
                    <div className="alert alert-info text-center" style={{ backgroundColor: '#e7f3fe', color: '#31708f', border: '1px solid #bce8f1' }}>
                        Please select a job to view or manage the assessment questions.
                    </div>
                )}

                {/* Questions Section */}
                {selectedJob && (
                    <div>
                        <h5 className="mt-4">Questions for the Job</h5>
                        {questions.length === 0 && <p>No questions available for this job.</p>}
                        {questions.map((question, qIndex) => (
                            <div key={qIndex} className="mb-3">
                                {isEditing ? (
                                    <>
                                        <label htmlFor={`question-${qIndex}`} className="form-label">
                                            Question {qIndex + 1}:
                                        </label>
                                        <input
                                            type="text"
                                            id={`question-${qIndex}`}
                                            className="form-control"
                                            value={question.question}
                                            onChange={(event) => handleQuestionChange(qIndex, event)}
                                            required
                                        />

                                        {/* Options */}
                                        <div className="mt-3">
                                            {question.options.map((option, optionIndex) => (
                                                <div key={optionIndex} className="input-group mb-2">
                                                    <span className="input-group-text">Option {optionIndex + 1}</span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={option}
                                                        onChange={(event) => handleOptionChange(qIndex, optionIndex, event)}
                                                        required
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Correct Answer */}
                                        <div className="mt-3">
                                            <label htmlFor={`correctAnswer-${qIndex}`} className="form-label">
                                                Correct Answer:
                                            </label>
                                            <input
                                                type="text"
                                                id={`correctAnswer-${qIndex}`}
                                                className="form-control"
                                                value={question.correctAnswer}
                                                onChange={(event) => handleCorrectAnswerChange(qIndex, event)}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-danger mt-2"
                                            onClick={() => deleteQuestion(qIndex)}
                                        >
                                            Delete Question
                                        </button>
                                    </>
                                ) : (
                                    <div className="p-3 mb-4 border rounded" style={{ backgroundColor: '#f9f9f9' }}>
                                        <h6>Question {qIndex + 1}:</h6>
                                        <p>{question.question}</p>
                                        <ul className="list-group">
                                            {question.options.map((option, optionIndex) => (
                                                <li
                                                    key={optionIndex}
                                                    className={`list-group-item ${option === question.correctAnswer ? 'bg-light text-success' : ''}`}
                                                    style={option === question.correctAnswer ? { backgroundColor: '#d4edda', borderColor: '#c3e6cb' } : {}}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-2">
                                            <strong>Correct Answer:</strong> <span className="badge bg-success">{question.correctAnswer}</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isEditing && (
                            <button type="button" className="btn btn-outline-primary mt-3" onClick={addNewQuestion}>
                                Add New Question
                            </button>
                        )}

                        <div className="mt-4">
                            <button type="button" className="btn btn-secondary" onClick={toggleEditMode}>
                                {isEditing ? 'Cancel Edit' : 'Edit Questions'}
                            </button>

                            {isEditing && (
                                <button type="submit" className="btn btn-primary ms-3">
                                    Save Assessment
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};
