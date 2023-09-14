import React, { useState } from 'react';

const AddEmployeePopup = ({ employees, setEmployees, setIsAdding }) => {
  const [newEmployee, setNewEmployee] = useState({
    id: '', // You can generate a unique ID here
    firstName: '',
    lastName: '',
    // Add other employee fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    // Validate and add the new employee to the employees list
    if (newEmployee.firstName.trim() === '' || newEmployee.lastName.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Update the employees list with the new employee
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);

    // Save the updated list in local storage
    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));

    // Close the popup
    setIsAdding(false);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add Employee</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newEmployee.lastName}
              onChange={handleInputChange}
            />
          </div>
          {/* Add other form fields for additional employee data here */}
          <div className="form-actions">
            <button type="button" onClick={handleAddEmployee}>
              Add Employee
            </button>
            <button type="button" onClick={() => setIsAdding(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeePopup;
