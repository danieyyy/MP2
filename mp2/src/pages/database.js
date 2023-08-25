import React, { useState } from 'react';
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

  const addEmployee = () => {
    if (!employeeNumber || !fullName || !email || !phoneNumber || !dateHired)
      return;

    if (editingIndex !== -1) {
      const updatedEmployees = [...employees];
      updatedEmployees[editingIndex] = {
        employeeNumber,
        fullName,
        email,
        phoneNumber,
        dateHired,
      };
      setEmployees(updatedEmployees);
      setEditingIndex(-1);
    } else {
      setEmployees([
        ...employees,
        {
          employeeNumber,
          fullName,
          email,
          phoneNumber,
          dateHired,
        },
      ]);
    }

    setEmployeeNumber('');
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setDateHired('');
    setShowModal(false); // Close the modal after adding/updating
  };

  const editEmployee = (index) => {
    const employee = employees[index];
    setEmployeeNumber(employee.employeeNumber);
    setFullName(employee.fullName);
    setEmail(employee.email);
    setPhoneNumber(employee.phoneNumber);
    setDateHired(employee.dateHired);
    setEditingIndex(index);
    setShowModal(true); // Open the modal for editing
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
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

    return(
      <div className='Database'>
        <div className='main'>
          <div className='content'>
            <Container>
            <h1 className="mt-4">ABC Tech Inc. Reporting and Raw Data</h1>
            <Button
              variant="success"
              className="mb-3"
              onClick={openAddModal}
            >
              Add Employee
            </Button>
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
                  <Button variant="primary" onClick={addEmployee}>
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
                {employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.employeeNumber}</td>
                    <td>{employee.fullName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.dateHired}</td>
                    <td>
                      <Button
                        variant="info"
                        className="mr-2"
                        onClick={() => editEmployee(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
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

