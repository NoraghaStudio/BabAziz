import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Cart } from './pages/Cart';
import { AdminDashboard } from './pages/AdminDashboard';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;