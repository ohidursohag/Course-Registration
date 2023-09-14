
import PropTypes from 'prop-types';
import dollerSign from '../../Asset/icons/dollar-sign .svg';
import bookIcon from '../../Asset/icons/ic_book.svg';
const Course = props => {
   return (
      <div className='w-[350px] p-4 bg-white rounded-xl' >
         <figure className='mb-2'>
            <img className='w-full' src="https://i.ibb.co/9vmyvkV/C-Programming.png" alt="Introduction to C Programming" />
         </figure>
         <h3 className='text-xl font-semibold text-[#1C1B1B] mb-3'>Introduction to C Programming</h3>
         <p className='text-sm text-[rgba(28,27,27,0.6)] leading-6 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

         <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-3'>
               <img src={dollerSign} alt="" />
               <p className='text-[rgba(28,27,27,0.5)] text-lg font-semibold'>Price : 15000</p>
            </div>
            <div className='flex items-center gap-3'>
               <img src={bookIcon} alt="" />
               <p className='text-[rgba(28,27,27,0.5)] text-lg font-semibold'>Credit : 1hr</p>
            </div>
         </div>
         <button className='btn btn-secondary w-full bg-[#2F80ED] border-none normal-case text-xl text-white hover:bg-sky-400'>Select</button>
      </div>
   );
};

Course.propTypes = {
   
};

export default Course;