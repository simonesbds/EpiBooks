import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  const { theme } = useContext(ThemeContext);

  const handleSelect = () => {
    setSelectedAsin(selectedAsin === book.asin ? null : book.asin);
  };

  return (
    <Card
      className={`book-card h-100 ${selectedAsin === book.asin ? 'selected-book' : ''} ${theme}`}
      onClick={handleSelect}
    >
      <div className="image-container">
        <Card.Img variant="top" src={book.img} className="book-image" alt={book.title} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title className="text-center book-title">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;