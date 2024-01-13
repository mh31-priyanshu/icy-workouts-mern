import {useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts',{
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type' :'application/json'
            }
        })

        const json = await response.json()

        if(!json.ok){
            setError(json.error)
        }
        if(json.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New Workout added!')
        }

    }

    return (
        <div className="ml-10 mt-2">
            <div className="font-extrabold text-gray-800 text-lg">Add new Workout</div>
            <form action="" className="mt-5 flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div  className="flex flex-col">
                    <label className="text-md font-medium text-gray-500" >Excercise title:</label>
                    <input className="px-2 py-1 mt-1 w-[20rem] rounded-sm " type="text"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                    />
                </div>
                <div  className="flex flex-col">
                    <label className="text-md font-medium text-gray-500" >Loads (in kg):</label>
                    <input className="px-2 py-1 mt-1 w-[20rem] rounded-sm " type="number"
                        onChange={(e) => {
                            setLoad(e.target.value)
                        }}
                        value={load}
                    />
                </div>
                <div  className="flex flex-col">
                    <label className="text-md font-medium text-gray-500" >Reps:</label>
                    <input className="px-2 py-1 mt-1 w-[20rem] rounded-sm " type="number"
                        onChange={(e) => {
                            setReps(e.target.value)
                        }}
                        value={reps}
                    />
                </div>
                <button className="bg-green-600 text-white rounded-sm py-2 font-semibold " >Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
        
    )
}

export default WorkoutForm