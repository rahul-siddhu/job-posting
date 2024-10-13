import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the custom CSS file for hover effect

export const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);
    const [newDesc, setNewDesc] = useState(todo.desc);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(todo.sno, newTitle, newDesc);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewTitle(todo.title);
        setNewDesc(todo.desc);
    };

    return (
        <div className="card todo-item-card shadow-sm mb-4"> {/* Add custom CSS class for the hover effect */}
            <div className="card-body">
                {isEditing ? (
                    <>
                        <div className="form-group mb-3">
                            <label htmlFor="editTitle" className="form-label"><strong>Job Title</strong></label>
                            <input
                                type="text"
                                id="editTitle"
                                value={newTitle}
                                className="form-control"
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="editDesc" className="form-label"><strong>Job Description</strong></label>
                            <textarea
                                id="editDesc"
                                value={newDesc}
                                className="form-control"
                                rows="3"
                                onChange={(e) => setNewDesc(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-end">
                            <button className="btn btn-sm btn-success me-2" onClick={handleSaveClick}>Save</button>
                            <button className="btn btn-sm btn-secondary" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h4 className="card-title">{todo.title}</h4>
                        <p className="card-text">{todo.desc}</p>

                        {/* Show total candidates */}
                        <p className="card-text">
                            <strong>Total Candidates:</strong> {todo.totalCandidates || (todo.candidates ? todo.candidates.length : 0)}
                        </p>

                        <div className="d-flex justify-content-start mt-3">
                            <button className="btn btn-sm btn-danger me-2" onClick={() => onDelete(todo)}>Delete</button>
                            <button className="btn btn-sm btn-primary me-2" onClick={handleEditClick}>Edit</button>
                            <Link to={`/job/${todo.sno}/candidates`}>
                                <button className="btn btn-sm btn-secondary">View Candidates</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
