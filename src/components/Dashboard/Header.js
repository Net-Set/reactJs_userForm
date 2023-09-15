import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Add from './Add';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '200px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: '1px solid #4d4d4d',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ employees, setEmployees,
  setIsAdding }) {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false); // Define isAddModalOpen and its setter

  const iconStyle = {
    color: '#0366ee',
    fontSize: '30px',
    marginLeft: '30px',
    border: 'none',
    background: 'white', // Remove the blue background color
  };

  // Define the functions
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeModel = () => {
    setIsAddModalOpen(false); // Use setIsAddModalOpen to close the modal.
  };

  const handleAddSubmit = (formData) => {
    // Handle the submission logic here
    // You can access the submitted data in the 'data' parameter
    console.log('Form Data Submitted:', formData);

  };
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: 'white', marginTop: '10px', marginBottom: '20px' }}>
      <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ border: 'none', backgroundClip: 'none' }}
          >
            <FontAwesomeIcon icon={faUsers} style={iconStyle} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ color: '#333' }}
          >
            <h3>User Details</h3>
          </Typography>
          <Search style={{ border: '1px solid  #4d4d4d', width: '250px' }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#222' }} />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ color: '#222', width: '100%' }}
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <FontAwesomeIcon icon={faUserPlus} style={iconStyle} onClick={openAddModal} />
          {isAddModalOpen && (
            <Add isOpen={isAddModalOpen} employees={employees}   setEmployees={setEmployees}
            setIsAdding={setIsAdding}closeModel={closeModel} onSubmit={handleAddSubmit} />

          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
