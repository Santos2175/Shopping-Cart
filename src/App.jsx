import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
