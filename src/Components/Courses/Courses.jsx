
import PropTypes from 'prop-types';
import Course from './Course';

const Courses = ({ coursesData }) => {
   console.log(coursesData);
   return (
      <div className='col-span-3 flex flex-wrap gap-5'>
         {
            coursesData.map(course => <Course key={course.id} course={course}/>)
         }
      </div>
   );
};

Courses.propTypes = {
   coursesData: PropTypes.array.isRequired
};

export default Courses;