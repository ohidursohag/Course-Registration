
import PropTypes from 'prop-types';
import dollerSign from '../../Asset/icons/dollar-sign .svg';
import bookIcon from '../../Asset/icons/ic_book.svg';
const Course = ({ course, handleSelectedCoursesData }) => {
   
   const { coverImage, courseName, description, coursePrice, creditHours } = course
   return (
      <div className='w-[350px] sm:w-[310px] md:w-full lg:w-[325px] xl:w-[390px] 2xl:w-[350px] mx-auto lg:mx-0 p-4  bg-white rounded-xl ' >
         <figure className='mb-2'>
            <img className=' h-[170px]' src={coverImage} alt={courseName} />
         </figure>
         <h3 className='text-xl lg:text-lg   font-bold text-[#1C1B1B] mb-3'>{courseName}</h3>
         <p className='text-sm text-[rgba(28,27,27,0.6)] leading-6 mb-4'>{description}</p>

         <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-3 sm:gap-1 md:gap-3'>
               <img src={dollerSign} alt="" />
               <p className='text-[rgba(28,27,27,0.5)] text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold'>Price : {coursePrice}</p>
            </div>
            <div className='flex items-center gap-3 sm:gap-1 md:gap-3'>
               <img src={bookIcon} alt="" />
               <p className='text-[rgba(28,27,27,0.5)] text-lg sm:text-base md:text-lg lg:text-base xl:text-lg  font-semibold'>Credit : {creditHours}hr</p>
            </div>
         </div>
         <button id={`course${course.id}`} onClick={() => handleSelectedCoursesData(course)} className='btn btn-secondary w-full  bg-[#2F80ED] border-none normal-case text-xl mt-auto text-white hover:bg-sky-400'>Select</button>
      </div>
   );
};

Course.propTypes = {
   course: PropTypes.object,
   handleSelectedCoursesData: PropTypes.func.isRequired
};

export default Course;