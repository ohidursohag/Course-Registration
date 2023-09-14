import Courses from "./Components/Courses/Courses"
import SelectedCourses from "./Components/SelectedCourses/SelectedCourses"


function App() {

  return (
    <div className="container mx-auto px-2">
      <h1 className='text-4xl font-bold text-center py-12'>Course Registration</h1>

      <div>
        <Courses/>
        <SelectedCourses/>
      </div>
    </div>
  )
}

export default App
