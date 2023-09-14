import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <HeaderContainer>
      <HeaderContents>
        <h1>
          <FaUser /> User Details
        </h1>
        <HeaderContent>
          <SearchBar>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <SearchButton onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchBar>
          <ActionButton onClick={() => setIsAdding(true)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Employee
          </ActionButton>
        </HeaderContent>
      </HeaderContents>
      {/* <Logout setIsAuthenticated={setIsAuthenticated} /> */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  /* Add any global header styles here */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px; /* Add padding for spacing */
`;

const HeaderContents = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end; /* Align content to the right */
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  border-radius: 4px;
  margin-left:450px;
  justify-content: flex-end; /* Align the search bar to the right */
  align-items: center;
`;

const SearchButton = styled.button`
  border: none;
  background: black;
  cursor: pointer;
  padding: 11px;
  margin-right:5px;
  color: white; /* Add text color */
`;

const ActionButton = styled.button`
  /* Define styles for the action button as needed */
`;
