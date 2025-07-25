//import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../Data/Courses';
import Button from '../Components/Button';

const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-700">
        <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
        <p className="mb-6">Lo sentimos, el curso que buscas no existe o fue eliminado.</p>
        <Button onClick={() => navigate('/courses')}>Volver a Cursos</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img src={course.image} alt={course.title} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">{course.title}</h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{course.longDescription}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Detalles del Curso:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><span className="font-medium">Duración:</span> {course.duration}</li>
              <li><span className="font-medium">Modalidad:</span> {course.modality}</li>
              <li><span className="font-medium">Precio:</span> {course.price}</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Temario:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.temario.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Facilitador:</h2>
            <p className="text-gray-700 font-medium">{course.facilitator.name}</p>
            <p className="text-gray-600 text-sm italic">{course.facilitator.bio}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate('/contact')} className="w-full sm:w-auto">
              ¡Inscríbete Ahora!
            </Button>
            <Button variant="secondary" onClick={() => navigate('/courses')} className="w-full sm:w-auto">
              Volver a Cursos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;