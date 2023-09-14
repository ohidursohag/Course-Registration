
import PropTypes from 'prop-types';
import Course from './Course';

const Courses = ({ coursesData, handleSelectedCoursesData }) => {
   return (
      <div className='col-span-3 flex flex-wrap gap-5'>
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