import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ employees, handleEdit, handleDelete }) => {
  const ITEMS_PER_PAGE = 10; // Number of items to display per page

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);

  // Sort and paginate the employees
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
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {/* <div className="pagination">
        {Array.from({ length: Math.ceil(sortedEmployees.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Table;
