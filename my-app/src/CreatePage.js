import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = ({ students, setStudents, editData, setEditData }) => {
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    collegeName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      const updatedStudents = students.map((student) =>
        student.id === editData.id ? { ...form, id: student.id } : student
      );
      setStudents(updatedStudents);
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }
    setEditData(null);
    navigate("/");
  };

  return (
    <div style={{}} >
    <img
        src="/image/iStock-1210745478-conflicted-scaled.jpg" // Replace with your image path
        alt="Cover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position:"fixed",
          
          
          
          right:"20px",
          zIndex:"-1",
        }}
      />
      <h1 style={{margin:'180px ', color:'black',textAlign:'center',marginTop:"5px"}}>{editData ? "Edit Student" : "Create New Student"}</h1>
      
      <form style={{margin:'170px ',marginTop:"5px"}} onSubmit={handleSubmit} >
      
      
        <label style={{display:'block',color:'black',fontWeight:'bold',marginTop:"100px"}}>Name:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        
        
        <label  style={{display:'block',color:'black',fontWeight:'bold'}}>Father Name:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="fatherName" placeholder="Father Name" value={form.fatherName} onChange={handleChange} required />
        
        
        <label  style={{display:'block',color:'black',fontWeight:'bold'}}> College Name:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="collegeName" placeholder="College Name" value={form.collegeName} onChange={handleChange} required />
        
        
        <label  style={{display:'block',color:'black',fontWeight:'bold'}}>DOB:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="date" name="dob" value={form.dob} onChange={handleChange} required />
        
        
        <label  style={{display:'block',color:'black',fontWeight:'bold'}}>Gender:</label>
        <select style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px', backgroundColor:'white'}}  id="gender" name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select> 
        <label  style={{display:'block',color:'#black',fontWeight:'bold'}}>PhoneNo.:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} required />
        <label  style={{display:'block',color:'black',fontWeight:'bold'}}>Email:</label>
        <input style={{width:'100%', padding:'10px',boxSizing:'border-box', border:'1px solid #ddd', borderRadius:'5px'}} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button  type="submit" style={{margin:'200px ', padding:'15px',borderRadius:'10px',border:'none',backgroundColor:'black',color:'white', cursor:'pointer',fontSize:'16px'}}>{editData ? "Update" : "Submit"}</button>
        <button type="submit" style={{borderRadius:'10px',padding:'15px',backgroundColor:'black',color:'white',cursor:'pointer', fontSize:'16px'}} onClick={() => navigate("/")} >Cancel</button>
      </form>
    </div>
  );
}; 

export default CreatePage;
