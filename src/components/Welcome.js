import { Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="text-center mt-4">
      <Alert variant="success">
        <h1>Welcome to EpiBooks!!</h1>
        <p>Where your immagination become reality.</p>
      </Alert>
    </div>
  );
};

export default Welcome;