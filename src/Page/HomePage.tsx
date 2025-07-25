//import React from 'react';
import { courses } from '../Data/Courses';
import CourseCard from '../Components/CourseCard';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredCourses = courses.slice(0, 3); // Muestra los primeros 3 como destacados

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          ¡Impulsa tu Futuro con Conocimiento!
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Descubre cursos de vanguardia en tecnología, negocios y desarrollo personal.
        </p>
        <Link to="/courses">
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Explorar Cursos
          </Button>
        </Link>
      </section>

      {/* Cursos Destacados/Recientes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Cursos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/courses">
            <Button>Ver Todos los Cursos</Button>
          </Link>
        </div>
      </section>

      {/* Sección de "Acerca de Nosotros" o Testimonios (Opcional) */}
      <section className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Somos una empresa líder en capacitación con un enfoque en la calidad educativa y la aplicación práctica. Nuestros instructores son expertos en su campo y nuestras metodologías están diseñadas para garantizar tu éxito.
        </p>
      </section>
    </div>
  );
};

export default HomePage;