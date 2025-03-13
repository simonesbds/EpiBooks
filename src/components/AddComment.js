import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const AddComment = ({ asin, refreshComments }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  const [error, setError] = useState('');

  const submitComment = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjOTcyYmY0YjFiYjAwMTU3MTBmZGMiLCJpYXQiOjE3NDE4OTQ2NzAsImV4cCI6MTc0MzEwNDI3MH0.TgaxWWWIEpuiOI9ZXFC92fAVfIvGMaRSUs1f-Q95-c8"
        },
        body: JSON.stringify({ comment, rate, elementId: asin })
      });
      if (!response.ok) throw new Error('Failed to post comment');
      setComment('');
      setRate(1);
      refreshComments();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mb-3">
        <Form.Group>
          <Form.Label>Write a review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Rate (1-5)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Form.Group>
        <Button variant="warning" className="mt-3" onClick={submitComment}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddComment;