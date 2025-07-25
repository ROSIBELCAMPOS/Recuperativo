import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../Type/Index';

interface CourseThumbnailProps {
  course: Course;
}

const CourseThumbnail: React.FC<CourseThumbnailProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="block bg-white rounded-lg shadow-md p-4 transform transition duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-4">
      <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-sm text-blue-600 hover:underline">Ver detalles</p>
      </div>
    </Link>
  );
};

export default CourseThumbnail;