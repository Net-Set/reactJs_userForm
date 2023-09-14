import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const GenderContainerRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SignUpForm = styled.form`
  button:focus {
    outline-color: purple;
  }
`;

const PurpleButton = styled.button`
  background-color: purple; /* Change the button color to purple */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
`;

const PurpleInput = styled.input`
  &:focus {
    border-color: purple; /* Change the border color to purple when focused */
  }
  color: purple; /* Change the font color to purple */
`;

const PurpleTextArea = styled.textarea`
  &:focus {
    border-color: purple; /* Change the border color to purple when focused */
  }
  color: purple; /* Change the font color to purple */
`;

const PurpleLabel = styled.label`
  color: purple; /* Change the font color to purple */
`;

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Gender, setGender] = useState('Male');
  const [City, setCity] = useState('');
  const [PrivacyPolicy, setPrivacyPolicy] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!Name || !Address || !Email || !Mobile || !City || !PrivacyPolicy) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all required fields and accept the privacy policy.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      Name,
      Address,
      Email,
      Mobile,
      Gender,
      City,
    };

    employees.push(newEmployee);
    localStorage.setItem('employeesData', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Name}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleReset = () => {
    setName('');
    setAddress('');
    setEmail('');
    setMobile('');
    setGender('Male');
    setCity('');
    setPrivacyPolicy(false);
  };

  return (
    <div className="small-container">
      <SignUpForm onSubmit={handleAdd}>
      <h1 style={{ color: 'purple' }}>Registration</h1>
        <PurpleLabel htmlFor="Name">Name</PurpleLabel>
        <PurpleInput
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <PurpleLabel htmlFor="Address">Address</PurpleLabel>
        <PurpleTextArea
          id="Address"
          name="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          rows={4}
          required
        />
        <PurpleLabel htmlFor="Email">Email</PurpleLabel>
        <PurpleInput
          id="Email"
          type="email"
          name="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PurpleLabel htmlFor="Mobile">Mobile</PurpleLabel>
        <PurpleInput
          id="Mobile"
          type="text"
          name="Mobile"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
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
              checked={Gender === 'Male'}
              onChange={() => setGender('Male')}
              required
              style={{marginLeft:'5px'}}
            />
          </PurpleLabel>
          <PurpleLabel>
            Female
            <input
              type="radio"
              name="Gender"
              value="Female"
              checked={Gender === 'Female'}
              onChange={() => setGender('Female')}
              required
              style={{marginLeft:'5px',backgroundClip:'purple'}}
            />
          </PurpleLabel>
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
        <PurpleLabel>
          <input
            type="checkbox"
            name="PrivacyPolicy"
            checked={PrivacyPolicy}
            onChange={() => setPrivacyPolicy(!PrivacyPolicy)}
            required
          />{' '}
          I accept the privacy policy
        </PurpleLabel>
        <div style={{ marginTop: '30px' }}>
          <PurpleButton type="submit">SIGN UP</PurpleButton>
          <PurpleButton
            type="button"
            className="muted-button"
            onClick={handleReset}
          >
            RESET
          </PurpleButton>
        </div>
      </SignUpForm>
    </div>
  );
};

export default Add;
