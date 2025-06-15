import './App.css'
import Header from './Header'
import { courses } from "./data"
import Course from './Course'

function App() {
  return (
    <div className="app-container">
      <Header />
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App
