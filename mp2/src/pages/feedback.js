import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !feedback) {
      setFormError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, feedback }),
      });

      if (response.ok) {
        setFormError('');
        setSubmitted(true);
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        setFormError('An error occurred while submitting the form.');
      }
    } catch (error) {
      setFormError('An error occurred while submitting the form.');
      console.error(error);
    }
  };

  return (
    <div className='Database'>
        <div className='main'>
          <div className='content'>
                <Container className="mt-5 mb-5">
                    <h2 className="mb-4">Share your feedback</h2>
                    {formError && <Alert variant="danger">{formError}</Alert>}
                    {submitted && <Alert variant="success">Feedback submitted successfully!</Alert>}
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className='mt-4' controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group className='mt-4' controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group className='mt-4 mb-2' controlId="feedback">
                        <Form.Label>What's you feedback about?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Enter your feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        </Form.Group>

                        <Button className='mt-4 mb-3' variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    </div>
  );
};

export default Feedback;
