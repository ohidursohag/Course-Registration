
import PropTypes from 'prop-types';

const SelectedItems = ({ selectedCourse, index }) => {

   return (
      <p className='text-[#1C1B1B99]'>{index+1}. {selectedCourse.courseName}</p>
   )
   
}

const SelectedCourses = ({ selectedCourses, totalPrice, totalCreditHours, remainingCreditHours }) => {

   return (
      <div className='w-[350px] sm:w-[300px] md:w-[360px] lg:w-[320px] xl:w-[390px] 2xl:w-[360px] mx-auto mb-5 px-6 bg-white rounded-xl h-max sm:order-2 sm:fixed sm:right-2 md:right-3 xl:right-10 2xl:right-[10%]'>
         <h4 className='text-lg font-bold text-[#2F80ED] border-b-2 py-4'>Credit Hour Remaining {remainingCreditHours} hr</h4>
         <div className='border-b-2 py-4'>
            <h2 className='text-xl font-bold mb-5'>Course Name</h2>
            <div>
               {
                  selectedCourses.map((selectedCourse, index) => <SelectedItems key={index} index={index} selectedCourse={selectedCourse}/>)
               }               
            </div>
         </div>
         <h3 className='border-b-2 py-4 font-bold'>Total Credit Hour : <span className='text-[#1C1B1B99]'>{totalCreditHours}</span></h3>
         <h3 className=' py-4 font-bold'>Total Price : <span className='text-[#1C1B1B99]'>{totalPrice} USD</span></h3>
      </div>
   );
};

SelectedCourses.propTypes = {
   selectedCourses: PropTypes.array,
   totalPrice: PropTypes.number,
   totalCreditHours: PropTypes.number,
   remainingCreditHours: PropTypes.number,
};

SelectedItems.propTypes = {
   selectedCourse: PropTypes.object.isRequired,
   index: PropTypes.number,
};

export default SelectedCourses;