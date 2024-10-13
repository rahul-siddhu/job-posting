import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { CandidateDetails } from "./MyComponents/CandidateDetails";
import { CandidatePage } from "./MyComponents/CandidatePage"; // Import for the candidate page
import Layout from "./MyComponents/Layout";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ManageAssessments } from './MyComponents/ManageAssessments';

const getRandomCandidates = (candidates, count = 3) => {
  const shuffled = [...candidates].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [candidates] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
      skills: ["React", "Node.js", "JavaScript"],
      experience: 3,
      resumeLink: "/Rahul_resume_oct.pdf",
      applicationDate: new Date(),
      status: "Under Review",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
      skills: ["Python", "Django", "SQL"],
      experience: 5,
      resumeLink: "/Chicago-Resume-Template-Creative.pdf",
      applicationDate: new Date(),
      status: "Interview Scheduled",
    },
    {
      id: 3,
      name: "John Snow",
      email: "john.snow@example.com",
      contact: "555-123-4567",
      skills: ["JavaScript", "React", "Node.js"],
      experience: 3,
      resumeLink: "/Grace-ResumeViking-15-1.pdf",
      applicationDate: new Date(),
      status: "Under Review",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.j@example.com",
      contact: "444-987-6543",
      skills: ["Java", "Spring Boot", "Microservices"],
      experience: 7,
      resumeLink: "/Grace-ResumeViking-21.pdf",
      applicationDate: new Date(),
      status: "Offer Extended",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.b@example.com",
      contact: "333-456-7890",
      skills: ["C#", ".NET Core", "Azure"],
      experience: 6,
      resumeLink: "/Vienna-Modern-Resume-Template.pdf",
      applicationDate: new Date(),
      status: "Application Received",
    },
    {
      id: 6,
      name: "Sophia Davis",
      email: "sophia.d@example.com",
      contact: "222-654-3219",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      experience: 2,
      resumeLink: "/Rahul_resume_oct.pdf",
      applicationDate: new Date(),
      status: "Rejected",
    },
    {
      id: 7,
      name: "David Clark",
      email: "david.clark@example.com",
      contact: "654-321-0987",
      skills: ["PHP", "Laravel", "MySQL"],
      experience: 4,
      resumeLink: "/Chicago-Resume-Template-Creative.pdf",
      applicationDate: new Date(),
      status: "Interview Scheduled",
  },
  {
      id: 8,
      name: "Ava Wilson",
      email: "ava.wilson@example.com",
      contact: "111-222-3333",
      skills: ["Python", "Machine Learning", "TensorFlow"],
      experience: 5,
      resumeLink: "/Grace-ResumeViking-15-1.pdf",
      applicationDate: new Date(),
      status: "Offer Extended",
  },
  {
      id: 9,
      name: "Liam Martinez",
      email: "liam.martinez@example.com",
      contact: "789-654-3210",
      skills: ["Go", "Kubernetes", "Docker"],
      experience: 6,
      resumeLink: "/Vienna-Modern-Resume-Template.pdf",
      applicationDate: new Date(),
      status: "Application Received",
  },
  {
      id: 10,
      name: "Olivia Anderson",
      email: "olivia.anderson@example.com",
      contact: "999-888-7777",
      skills: ["Angular", "TypeScript", "RxJS"],
      experience: 4,
      resumeLink: "/Rahul_resume_oct.pdf",
      applicationDate: new Date(),
      status: "Under Review",
  },
  {
      id: 11,
      name: "Ethan Rodriguez",
      email: "ethan.rodriguez@example.com",
      contact: "444-555-6666",
      skills: ["Swift", "iOS Development", "Xcode"],
      experience: 3,
      resumeLink: "/Grace-ResumeViking-21.pdf",
      applicationDate: new Date(),
      status: "Interview Scheduled",
  },
  {
      id: 12,
      name: "Isabella Moore",
      email: "isabella.moore@example.com",
      contact: "777-555-3333",
      skills: ["Ruby", "Rails", "PostgreSQL"],
      experience: 7,
      resumeLink: "/Vienna-Modern-Resume-Template.pdf",
      applicationDate: new Date(),
      status: "Rejected",
  },
  {
      id: 13,
      name: "Noah Taylor",
      email: "noah.taylor@example.com",
      contact: "321-654-9870",
      skills: ["Java", "Spring", "Hibernate"],
      experience: 5,
      resumeLink: "/Chicago-Resume-Template-Creative.pdf",
      applicationDate: new Date(),
      status: "Offer Extended",
  }
  
    
    // Add more candidates here
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const n=candidates.length;
    const randomNumber = Math.floor(Math.random() * (n + 1));
    const assignedCandidates = getRandomCandidates(candidates, randomNumber);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      candidates: assignedCandidates,
      totalCandidates: randomNumber,
    };
    setTodos([...todos, myTodo]);
  };

  const onEdit = (sno, newTitle, newDesc) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.sno === sno) {
        return { ...todo, title: newTitle, desc: newDesc };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Layout>
          <Header title="Job Posting" searchBar={false} />
          <Routes>
            <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
              </>
            } />
            <Route path="/about" element={<About />} />
            {/* New route for viewing candidates for a specific job based on sno */}
            <Route path="/job/:sno/candidates" element={<CandidatePage todos={todos} />} />
            <Route path="/candidate/:id" element={<CandidateDetails candidates={candidates} />} />
            <Route path="/manage-assessments" element={<ManageAssessments todos={todos} />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
