import { useEffect, useState } from "react"

//pages and components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {

  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () =>{
      const response = await fetch('/api/workouts')
      const json = await response.json()
      if(response.ok){
        setWorkouts(json)
        console.log(json)
      }
    }
    fetchWorkouts()
  },[])

  return (
    <div className="flex mt-10">
      <div className="ml-16">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  )
}

export default Home