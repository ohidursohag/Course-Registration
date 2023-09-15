import { useState } from "react"
import Courses from "./Components/Courses/Courses"
import SelectedCourses from "./Components/SelectedCourses/SelectedCourses"
import { useEffect } from "react"


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
          alert('❌ Course Alredy Selected')
          return
        } else {
          alert("❌ Total credit hours can't be more than 20hr")
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
      alert('❌ Course Alredy Selected')
    }

  }
  // console.log(selectdCourses);

  return (
    <div className="container mx-auto px-2">
      <h1 className='text-4xl font-bold text-center py-12'>Course Registration</h1>

      <div className="grid grid-cols-4 gap-5 pb-14">
        <Courses coursesData={coursesData} handleSelectedCoursesData={handleSelectedCoursesData} />
        <SelectedCourses selectedCourses={selectedCourses} totalPrice={totalPrice} totalCreditHours={totalCreditHours} remainingCreditHours={remainingCreditHours} />
      </div>
    </div>
  )
}

export default App
