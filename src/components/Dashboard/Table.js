import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import TablePagination from '@mui/material/TablePagination';
import Edit from './Edit';
const Table = ({ employees, handleEdit, handleDelete }) => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false); // Define isAddModalOpen and its setter

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const ITEMS_PER_PAGE = 10;
  const sortedEmployees = [...employees];

  if (sortConfig.key) {
    sortedEmployees.sort((a, b) => {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];

      if (keyA < keyB) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (keyA > keyB) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }

  const indexOfLastEmployee = (page + 1) * rowsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
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
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('id')}>
              No.{' '}
              {sortConfig.key === 'id' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('Name')}>
              Name{' '}
              {sortConfig.key === 'Name' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('Address')}>
              Address{' '}
              {sortConfig.key === 'Address' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('Email')}>
              Email{' '}
              {sortConfig.key === 'Email' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('Mobile')}>
              Mobile{' '}
              {sortConfig.key === 'Mobile' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('Gender')}>
              Gender{' '}
              {sortConfig.key === 'Gender' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th onClick={() => requestSort('City')}>
              City{' '}
              {sortConfig.key === 'City' && (
                <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
              )}
            </th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.length > 0 ? (
            currentEmployees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.Name}</td>
                <td>{employee.Address}</td>
                <td>{employee.Email}</td>
                <td>{employee.Mobile}</td>
                <td>{employee.Gender}</td>
                <td>{employee.City}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                    style={{ border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEdit} style={{ color: '#0366ee' }} onClick={openAddModal} />
                  
          {isAddModalOpen && (
            <Edit isOpen={isAddModalOpen} closeModel={closeModel} onSubmit={handleAddSubmit} />
          )}

                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                    style={{ border: 'none' }}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>

      <TablePagination
        
        component="div"
        count={employees.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Table;
