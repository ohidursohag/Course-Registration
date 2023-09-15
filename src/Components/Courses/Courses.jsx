
import PropTypes from 'prop-types';
import Course from './Course';

const Courses = ({ coursesData, handleSelectedCoursesData }) => {
   return (
      <div className='space-y-5 lg:space-y-0 lg:col-span-2 2xl:col-span-3 lg:flex flex-wrap lg:gap-3 xl:gap-6 xl:pl-3'>
         {
            coursesData.map(course => <Course key={course.id} course={course} handleSelectedCoursesData={handleSelectedCoursesData}/>)
         }
      </div>
   );
};

Courses.propTypes = {
   coursesData: PropTypes.array.isRequired,
   handleSelectedCoursesData: PropTypes.func.isRequired
};

export default Courses;