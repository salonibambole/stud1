import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreatePage from "./CreatePage";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);

  return (
    
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage 
              students={students} 
              setEditData={setEditData} 
              setStudents={setStudents} 
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreatePage 
              students={students} 
              setStudents={setStudents} 
              editData={editData} 
              setEditData={setEditData} 
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

