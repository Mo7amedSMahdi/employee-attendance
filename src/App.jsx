import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';

function App() {
  return (
    <Routes>
      {/* The asterisk (*) is a wildcard that matches any path. */}
      <Route path="*" element={<NotFound />} />
      {/* The path="/" matches the root URL. */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
