import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    expiryDate: '',
    location: '',
    donorId:''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donations', formData);
      setStatus('✅ Donation submitted successfully!');
      setFormData({ foodName: '', quantity: '', expiryDate: '', location: '',donorId:''});
    } catch (error) {
      console.error('❌ Error submitting donation:', error);
      setStatus('❌ Failed to submit donation.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Donate Surplus Food</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="foodName" placeholder="Food Name" value={formData.foodName} onChange={handleChange} required />
        <br /><br />
        <input type="text" name="quantity" placeholder="Quantity (e.g. 10kg)" value={formData.quantity} onChange={handleChange} required />
        <br /><br />
        <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        <br /><br />
        <input type="text" name="location" placeholder="Pickup Location" value={formData.location} onChange={handleChange} required />
        <br /><br />
        <input type="text" name="donorId" placeholder="Donor ID" value={formData.donorId} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit Donation</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;
