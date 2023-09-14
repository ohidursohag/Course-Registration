import { useState } from "react"
import Courses from "./Components/Courses/Courses"
import SelectedCourses from "./Components/SelectedCourses/SelectedCourses"
import { useEffect } from "react"


function App() {
  const [coursesData, setCoursesData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('CoursesData.json')
      const data = await response.json()
      setCoursesData(data);
    }  
    loadData()
  }, [])


  return (
    <div className="container mx-auto px-2">
      <h1 className='text-4xl font-bold text-center py-12'>Course Registration</h1>

      <div className="grid grid-cols-4 gap-5">
        <Courses coursesData={coursesData}/>
        <SelectedCourses />
      </div>
    </div>
  )
}

export default App
