//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Page/HomePage';
import CoursesPage from './Page/CoursesPage';
import CourseDetailPage from './Page/CourseDetailPage';
import ContactPage from './Page/ContactPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Puedes agregar una ruta para 404 Not Found si lo deseas */}
          <Route path="*" element={<h1 className="text-center text-2xl py-20">404 - Página no encontrada</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
