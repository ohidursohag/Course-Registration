import { useState } from "react"
import Courses from "./Components/Courses/Courses"
import SelectedCourses from "./Components/SelectedCourses/SelectedCourses"
import { useEffect } from "react"


function App() {
  const [coursesData, setCoursesData] = useState([])
  const [selectdCourses, setSelectdCourses] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('CoursesData.json')
      const data = await response.json()
      setCoursesData(data);
    }  
    loadData()
  }, [])
  const handleSelectedCoursesData = (course) => {
    const selectBtn = document.getElementById(`course${course.id}`)
      
    if (!selectdCourses.includes(course)) {
      setSelectdCourses([...selectdCourses, course])
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

      <div className="grid grid-cols-4 gap-5">
        <Courses coursesData={coursesData} handleSelectedCoursesData = {handleSelectedCoursesData}/>
        <SelectedCourses selectdCourses={selectdCourses}/>
      </div>
    </div>
  )
}

export default App
