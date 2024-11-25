import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = ({ students, setEditData, setStudents }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

 

  return (
    <div style={{ textAlign: "center", marginTop:"30px" }}>
    <img
        src="/image/school.jpg" // Replace with your image path
        alt="Cover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position:"absolute",
          left:"0px",
          right:"20px",
          zIndex:"-1",
        }}
      />
      <br></br>
      <br></br>
      
    
      <h1>Student Details</h1>
      {students.length === 0 ? (
        <div>
          <p style={{fontSize:"25px",color:"darkblue"}}>No student data available.</p>
          
          
          <button
            onClick={() => navigate("/create")}
            style={{
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create New Student
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => navigate("/create")}
            style={{
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create New Student
          </button>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <p style={{fontSize:"20px",color:"darkblue"}} >Name: {student.name}</p>
                <p style={{fontSize:"20px",color:"darkblue"}}>Email: {student.email}</p>
                <button
                  onClick={() => {
                    setEditData(student);
                    navigate("/create");
                  }}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "black",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    margin:"20px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "black",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
