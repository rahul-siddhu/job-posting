import React from 'react';

export const About = () => {
    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4 bg-light">
                <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#4a90e2' }}>
                    About <span style={{ fontWeight: 'bold' }}>Job Posting</span>
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                    Welcome to <strong>Job Posting</strong>, your one-stop platform for connecting employers with talented professionals. 
                    Whether you're a company looking to fill a critical role or a job seeker aiming to advance in your career, 
                    <strong> Job Posting</strong> simplifies the hiring process and ensures success for both sides.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                    We believe that the right job can transform a person’s life, and the right candidate can elevate a company’s potential. 
                    With our user-friendly job posting tools and access to a wide pool of talented professionals, finding the perfect match 
                    has never been easier.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                    <strong>Job Posting</strong> is committed to bridging the gap between employers and job seekers, fostering growth, 
                    and building a brighter professional future for everyone.
                </p>
            </div>
        </div>
    );
};
