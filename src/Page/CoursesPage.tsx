//import React from 'react';
import { courses } from '../Data/Courses';
import CourseThumbnail from '../Components/CourseThumbnail';

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Nuestros Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseThumbnail key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;