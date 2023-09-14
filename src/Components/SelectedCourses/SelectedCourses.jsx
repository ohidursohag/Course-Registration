
import PropTypes from 'prop-types';

const SelectedCourses = props => {
   return (
      <div className='w-[350px] px-6 bg-white rounded-xl h-max'>
         <h4 className='text-lg font-bold text-[#2F80ED] border-b-2 py-4'>Credit Hour Remaining 7 hr</h4>
         <div className='border-b-2 py-4'>
            <h2 className='text-xl font-bold mb-5'>Course Name</h2>
            <div>
               <p className='text-[#1C1B1B99]'>1 Software Engineering</p>
               <p className='text-[#1C1B1B99]'>1 Software Engineering</p>
               <p className='text-[#1C1B1B99]'>1 Software Engineering</p>
               
            </div>
         </div>
            <h3 className='border-b-2 py-4 font-semibold'>Total Credit Hour : 13</h3>
            <h3 className=' py-4 font-semibold'>Total Price : 48000 USD</h3>
      </div>
   );
};

SelectedCourses.propTypes = {
   
};

export default SelectedCourses;