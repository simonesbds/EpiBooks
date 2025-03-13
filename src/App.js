import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
import { ThemeProvider } from './context/ThemeContext';

const About = () => <div className="text-center mt-4"><h2>About Us</h2><p>We love books!</p></div>;

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<About />} />
              <Route path="/browse" element={<AllTheBooks searchQuery={searchQuery} />} />
            </Routes>
          </div>
          <MyFooter />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;