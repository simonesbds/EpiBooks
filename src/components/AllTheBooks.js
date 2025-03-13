import { Container, Row, Col } from 'react-bootstrap';
import books from '../data/fantasy.json';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { useState } from 'react';

const AllTheBooks = () => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={8}>
          <Row className="g-4">
            {books.map((book) => (
              <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
                <SingleBook
                  book={book}
                  selectedAsin={selectedAsin}
                  setSelectedAsin={setSelectedAsin}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4} className="comments-column">
          <CommentArea selectedAsin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;