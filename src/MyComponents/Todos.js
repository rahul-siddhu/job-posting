import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className="container" style={myStyle}>
        <h3 className="text-center my-4" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Job List
        </h3>

            {props.todos.length === 0 ? (
                <div className="text-center alert alert-info">
                    <h5>No Jobs to display</h5>
                    <p>Check back later or add new jobs to the list.</p>
                </div>
            ) : (
                <div className="row">
                    {props.todos.map((todo) => {
                        return (
                            <div className="col-md-4 mb-4" key={todo.sno}>
                                <TodoItem 
                                    todo={todo} 
                                    onDelete={props.onDelete} 
                                    onEdit={props.onEdit} 
                                    candidates={props.candidates}  // Pass assigned candidates to TodoItem
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
