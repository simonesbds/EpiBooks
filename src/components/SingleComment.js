import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const SingleComment = ({ comment, refreshComments }) => {
  const [editing, setEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjOTcyYmY0YjFiYjAwMTU3MTBmZGMiLCJpYXQiOjE3NDE4OTQ2NzAsImV4cCI6MTc0MzEwNDI3MH0.TgaxWWWIEpuiOI9ZXFC92fAVfIvGMaRSUs1f-Q95-c8"
        }
      });
      if (!response.ok) throw new Error('Failed to delete comment');
      refreshComments();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjOTcyYmY0YjFiYjAwMTU3MTBmZGMiLCJpYXQiOjE3NDE4OTQ2NzAsImV4cCI6MTc0MzEwNDI3MH0.TgaxWWWIEpuiOI9ZXFC92fAVfIvGMaRSUs1f-Q95-c8"
        },
        body: JSON.stringify({ comment: editedComment, rate: editedRate })
      });
      if (!response.ok) throw new Error('Failed to update comment');
      setEditing(false);
      refreshComments();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="my-3">
      {error && <Alert variant="danger">{error}</Alert>}
      {editing ? (
        <Form>
          <Form.Control value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
          <Form.Control type="number" min="1" max="5" value={editedRate} onChange={(e) => setEditedRate(e.target.value)} />
          <Button onClick={handleUpdate} className="mt-2 btn-sm" variant="success">Save</Button>
        </Form>
      ) : (
        <>
          <p>{comment.comment} - Rating: {comment.rate}</p>
          <Button size="sm" variant="warning" onClick={() => setEditing(true)}>Edit</Button>
          <Button size="sm" variant="danger" className="ms-2" onClick={handleDelete}>Delete</Button>
        </>
      )}
    </div>
  );
};

export default SingleComment;