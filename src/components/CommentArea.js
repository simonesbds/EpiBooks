import { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Spinner, Alert } from 'react-bootstrap';

const CommentArea = ({ selectedAsin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    if (!selectedAsin) {
      setComments([]);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${selectedAsin}/comments/`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRjOTcyYmY0YjFiYjAwMTU3MTBmZGMiLCJpYXQiOjE3NDE4OTQ2NzAsImV4cCI6MTc0MzEwNDI3MH0.TgaxWWWIEpuiOI9ZXFC92fAVfIvGMaRSUs1f-Q95-c8"
        }
      });
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [selectedAsin]);

  return (
    <div className="mt-3">
      {loading && <Spinner animation="border" variant="warning" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {selectedAsin && (
        <>
          <AddComment asin={selectedAsin} refreshComments={fetchComments} />
          <CommentList comments={comments} refreshComments={fetchComments} />
        </>
      )}
      {!selectedAsin && <Alert variant="info">Select a book to see and add reviews</Alert>}
    </div>
  );
};

export default CommentArea;