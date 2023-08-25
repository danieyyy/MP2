import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Modal } from 'react-bootstrap';

const Database = () => {

const [employees, setEmployees] = useState([]);
const [employeeNumber, setEmployeeNumber] = useState('');
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [dateHired, setDateHired] = useState('');
const [editingIndex, setEditingIndex] = useState(-1);
const [showModal, setShowModal] = useState(false);
const [filterText, setFilterText] = useState('');

useEffect(() => {
  fetchEmployees();
}, []);

const fetchEmployees = async () => {
  try {
    const response = await fetch('http://localhost:5000/employees');
    const data = await response.json();
    setEmployees(data);
  } catch (error){
    console.error('Error fetching employees', error);
  }
};

const addEmployee = async () => {
  try {
    const response = await fetch('http://localhost:5000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employeeNumber,
        fullName,
        email,
        phoneNumber,
        dateHired,
      }),
    });

    if (response.status === 201) {
      const newEmployee = await response.json();
      setEmployees([...employees, newEmployee]);
      setShowModal(false);
    } else {
      console.error('Error adding employee');
    }
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

const editEmployee = (index) => {
  const employeeToEdit = employees[index];
  setEmployeeNumber(employeeToEdit.employeeNumber);
  setFullName(employeeToEdit.fullName);
  setEmail(employeeToEdit.email);
  setPhoneNumber(employeeToEdit.phoneNumber);
  setDateHired(employeeToEdit.dateHired);
  setEditingIndex(index); // Set the editing index
  setShowModal(true); // Open the modal
};

const updateEmployee = async () => {
  try {
    const employeeToUpdate = employees[editingIndex]; // Get the employee being edited

    const response = await fetch(`http://localhost:5000/employees/${employeeToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employeeNumber,
        fullName,
        email,
        phoneNumber,
        dateHired,
      }),
    });

    if (response.status === 200) {
      const updatedEmployee = await response.json(); // Updated employee data from the backend
      const updatedEmployees = [...employees]; // Create a copy of the current employees array
      updatedEmployees[editingIndex] = updatedEmployee; // Update the existing employee with the edited data
      setEmployees(updatedEmployees); // Update the state with the new employees array
      setEditingIndex(-1); // Reset the editing index
      setShowModal(false); // Close the modal
    } else {
      console.error('Error updating employee');
    }
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};


const deleteEmployee = async (index) => {
  try {
    const response = await fetch(`http://localhost:5000/employees/${employees[index].id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      const updatedEmployees = employees.filter((_, i) => i !== index);
      setEmployees(updatedEmployees);
    } else {
      console.error('Error deleting employee');
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};

const openAddModal = () => {
  setEmployeeNumber('');
  setFullName('');
  setEmail('');
  setPhoneNumber('');
  setDateHired('');
  setEditingIndex(-1);
  setShowModal(true);
};

const closeAddModal = () => {
  setShowModal(false);
};

const filteredEmployees = employees.filter((employee) => {
  return employee.fullName && employee.fullName.toLowerCase().includes(filterText.toLowerCase());
});

    return(
      <div className='Database'>
        <div className='main'>
          <div className='content'>
            <Container>
              <h1 className="mt-4">ABC Tech Inc. Reporting and Raw Data</h1>
              <Button
              variant="success"
              className="mb-3"
              onClick={() => {
                openAddModal();
                setEditingIndex(-1);
              }}
            >
              Add Employee
            </Button>

              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search by Full Name"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                  />
                </Form.Group>
              </Form>

              <Modal show={showModal} onHide={closeAddModal}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {editingIndex !== -1 ? 'Edit Employee' : 'Add Employee'}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <Form>
                    <Form.Group>
                      <Form.Label>Employee Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={employeeNumber}
                        onChange={(e) => setEmployeeNumber(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Date Hired</Form.Label>
                      <Form.Control
                        type="date"
                        value={dateHired}
                        onChange={(e) => setDateHired(e.target.value)}
                      />
                    </Form.Group>

                    <Button variant="primary m-2" onClick={editingIndex !== -1 ? updateEmployee : addEmployee}>
                      {editingIndex !== -1 ? 'Update' : 'Add'}
                    </Button>


                    <Button variant="secondary ml-2" onClick={closeAddModal}>
                      Cancel
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Employee Number</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Hired</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.employeeNumber}</td>
                      <td>{employee.fullName}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phoneNumber}</td>
                      <td>{employee.dateHired}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="mr-2"
                          onClick={() => editEmployee(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className='m-2'
                          onClick={() => deleteEmployee(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
    </div>
    )
}

export default Database

