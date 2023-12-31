import { useState } from "react"
import Courses from "./Components/Courses/Courses"
import SelectedCourses from "./Components/SelectedCourses/SelectedCourses"
import { useEffect } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coursesData, setCoursesData] = useState([])
  const [selectedCourses, setSelectedCourses] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCreditHours, setTotalCreditHours] = useState(0)
  const [remainingCreditHours, setRemainingCreditHours] = useState(20)

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('CoursesData.json')
      const data = await response.json()
      setCoursesData(data);
    }
    loadData()
  }, [])

  const getTotalPrice = (price) => {
    setTotalPrice(totalPrice + price)
  }



  const handleSelectedCoursesData = (course) => {
    const selectBtn = document.getElementById(`course${course.id}`)
    const totalCredit = totalCreditHours + course.creditHours
    const remainingCredit = remainingCreditHours - course.creditHours
    if (!selectedCourses.includes(course)) {
      if (totalCredit > 20) {
        if (selectBtn.textContent === 'Selected') {
          toast("❌ Course Alredy Selected ❌", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,

          })
          return
        } else {
          toast("❌ Total credit can't be Over 20hr ❌", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,

          })
          return
        }
        
      } else {
        getTotalPrice(course.coursePrice)
        setRemainingCreditHours(remainingCredit)
        setTotalCreditHours(totalCredit)
      }
      
      setSelectedCourses([...selectedCourses, course])
      selectBtn.textContent = 'Selected'
      selectBtn.classList.remove('bg-[#2F80ED]')
      selectBtn.classList.remove('hover:bg-sky-400')
      selectBtn.classList.add('hover:bg-[#00D043]')
      selectBtn.classList.add('bg-[#00D043]')
    } else {
      toast("❌ Course Alredy Selected ❌", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      })

    }

  }
  // console.log(selectdCourses);

  return (
    <div className="container mx-auto px-3">
      <h1 className='text-3xl font-bold text-center py-8'>Course Registration</h1>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-3 xl:gap-6 pb-10">
        <SelectedCourses selectedCourses={selectedCourses} totalPrice={totalPrice} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} />
        <Courses coursesData={coursesData} handleSelectedCoursesData={handleSelectedCoursesData} />
      </div>
    </div>
  )
}

export default App
