import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
      <h1>User Details</h1>
      <SearchBar>
        <SearchInput
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
      <Logout setIsAuthenticated={setIsAuthenticated} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  /* Add any global header styles here */
`;

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 18px;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
`;

const SearchButton = styled.button`
  border: none;
  background: black;

  cursor: pointer;
  padding: 8px;
`;

const ActionButton = styled.button`
  /* Define styles for action button as needed */
`;
