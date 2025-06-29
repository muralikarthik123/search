import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setTableData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData(prev => [...prev, formData]); // Append new data
    navigate("/"); // Navigate to TablePage
  };

  return (
    <div>
      <h2>Enter User Details</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Enter Age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Home;