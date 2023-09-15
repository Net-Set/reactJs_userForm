import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const PurpleInput = styled.input`
  &:focus {
    border-color: purple; /* Change the border color to purple when focused */
  }
  color: purple; /* Change the font color to purple */
  margin:0px;
  height:30px;
  `;

const PurpleLabel = styled.label`
  color: purple; /* Change the font color to purple */
  margin:0px;
`;

const PurpleButton = styled.input`
  background-color: purple; /* Change the button color to purple */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const PurpleRadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  color: purple; /* Change the font color to purple */
`;

const GenderContainerRow = styled.div`
  display: flex;
  gap: 10px;
  color: purple; /* Change the font color to purple */
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  height:85%;
  max-width: 400px; /* Adjust the max-width as needed for your design */
`;

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [Name, setName] = useState(selectedEmployee.Name);
  const [Address, setAddress] = useState(selectedEmployee.Address);
  const [Email, setEmail] = useState(selectedEmployee.Email);
  const [Mobile, setMobile] = useState(selectedEmployee.Mobile);
  const [Gender, setGender] = useState(selectedEmployee.Gender);
  const [City, setCity] = useState(selectedEmployee.City);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!Name || !Address || !Email || !Mobile || !City) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      id,
      Name,
      Address,
      Email,
      Mobile,
      Gender,
      City,
    };

    const updatedEmployees = employees.map((emp) => (emp.id === id ? updatedEmployee : emp));

    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${updatedEmployee.Name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <PopupBackground>
      <PopupContainer>
        <form onSubmit={handleUpdate}>
          <h3 style={{ color: 'purple',margin:'0px' }}>User Update</h3>
          <PurpleLabel htmlFor="Name">Name</PurpleLabel>
          <PurpleInput
            id="Name"
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <PurpleLabel htmlFor="Address">Address</PurpleLabel>
          <PurpleInput
            id="Address"
            type="text"
            name="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <PurpleLabel htmlFor="Email">Email</PurpleLabel>
          <PurpleInput
            id="Email"
            type="email"
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PurpleLabel htmlFor="Mobile">Mobile</PurpleLabel>
          <PurpleInput
            id="Mobile"
            type="text"
            name="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        
          <PurpleLabel>Gender</PurpleLabel>
          <GenderContainerRow>
            <PurpleRadioLabel>
              Male
              <input
                type="radio"
                name="Gender"
                value="Male"
                checked={Gender === 'Male'}
                onChange={() => setGender('Male')}
                required
              />
            </PurpleRadioLabel>
            <PurpleRadioLabel>
              Female
              <input
                type="radio"
                name="Gender"
                value="Female"
                checked={Gender === 'Female'}
                onChange={() => setGender('Female')}
                required
              />
            </PurpleRadioLabel>
          </GenderContainerRow>
        
          <PurpleLabel htmlFor="City">City</PurpleLabel>
          <select
            id="City"
            name="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Miami">Miami</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Dallas">Dallas</option>
            <option value="Boston">Boston</option>
            <option value="Seattle">Seattle</option>
            <option value="Atlanta">Atlanta</option>
          </select>
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <PurpleButton type="submit" value="Update" />
            <PurpleButton
              style={{ marginLeft: '12px' }}
              className="muted-button"
              type="button"
              value="Cancel"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </form>
      </PopupContainer>
    </PopupBackground>
  );
};

export default Edit;
