import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../Type/Index';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.shortDescription}</p>
        <Link to={`/courses/${course.id}`}>
          <Button className="w-full">Ver más detalles</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;