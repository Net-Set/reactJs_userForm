import React, { useState } from 'react';
import styled from 'styled-components';

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
  height:94%;
  max-width: 400px; /* Adjust the max-width as needed for your design */
`;

const GenderContainerRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SignUpForm = styled.form`
  button:focus {
    outline-color: purple;
  };
  height:80%;
  margin:0px;
`;

const PurpleButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
`;

const PurpleInput = styled.input`
  &:focus {
    border-color: purple;
  }
  color: purple;
  margin:0px;
  height:30px;
`;

const PurpleTextArea = styled.textarea`
  &:focus {
    border-color: purple;
  }
  color: purple;
`;

const PurpleLabel = styled.label`
  color: purple;
  margin:0px;
`;

const Add = ({ employees, setEmployees, setIsAdding, closeModel, handleAddSubmit }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Address: '',
    Email: '',
    Mobile: '',
    Gender: 'Male',
    City: '',
    PrivacyPolicy: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleClose = () => {
    setIsAdding(false); // This function should close the modal.
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (
      !formData.Name ||
      !formData.Address ||
      !formData.Email ||
      !formData.Mobile ||
      !formData.City ||
      !formData.PrivacyPolicy
    ) {
      setMessage('Please fill in all required fields and accept the privacy policy.');
      return;
    }

    const id = employees.length + 2;
    const newEmployee = {
      id,
      ...formData,
    };

    const updatedEmployees = [...employees, newEmployee];
    localStorage.setItem('employeesData', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setIsAdding(false);

    setMessage(`${formData.Name}'s data has been added.`);
    closeModel();
  };

  const handleReset = () => {
    setFormData({
      Name: '',
      Address: '',
      Email: '',
      Mobile: '',
      Gender: 'Male',
      City: '',
      PrivacyPolicy: false,
    });
  };

  return (
    <PopupBackground>
      <PopupContainer>
        <SignUpForm onSubmit={handleAdd}>
          <h4 style={{ color: 'purple', textAlign: 'center', margin: '0px' }}>Registration</h4>
          <PurpleLabel htmlFor="Name">Name</PurpleLabel>
          <PurpleInput
            id="Name"
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <PurpleLabel htmlFor="Address">Address</PurpleLabel>
          <PurpleTextArea
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            rows={1}
            required
          />
          <PurpleLabel htmlFor="Email">Email</PurpleLabel>
          <PurpleInput
            id="Email"
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <PurpleLabel htmlFor="Mobile">Mobile</PurpleLabel>
          <PurpleInput
            id="Mobile"
            type="text"
            name="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
            required
          />
          <PurpleLabel>Gender</PurpleLabel>
          <GenderContainerRow>
            <PurpleLabel>
              Male
              <input
                type="radio"
                name="Gender"
                value="Male"
                checked={formData.Gender === 'Male'}
                onChange={handleChange}
                required
                style={{ marginLeft: '5px' }}
              />
            </PurpleLabel>
            <PurpleLabel>
              Female
              <input
                type="radio"
                name="Gender"
                value="Female"
                checked={formData.Gender === 'Female'}
                onChange={handleChange}
                required
                style={{ marginLeft: '5px' }}
              />
            </PurpleLabel>
          </GenderContainerRow>
          <PurpleLabel htmlFor="City">City</PurpleLabel>
          <select
            id="City"
            name="City"
            value={formData.City}
            onChange={handleChange}
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
          <PurpleLabel>
            <input
              type="checkbox"
              name="PrivacyPolicy"
              checked={formData.PrivacyPolicy}
              onChange={handleChange}
              required
            />{' '}
            I accept the privacy policy
          </PurpleLabel>
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <PurpleButton type="submit" onClick={handleAddSubmit}>SIGN UP</PurpleButton>
            <PurpleButton
              type="button"
              className="muted-button"
              onClick={handleReset}
            >
              RESET
            </PurpleButton>
            <PurpleButton type="button" onClick={closeModel}>
            CLOSE
          </PurpleButton>


            {message && <p style={{ color: 'red' }}>{message}</p>}
          </div>
        </SignUpForm>
      </PopupContainer>
    </PopupBackground>
  );
};

export default Add;
