const WorkoutDetails = ({workout}) =>{
    return(
        <div className="bg-white w-[45rem] py-3 px-8 my-3">
            <div className="font-extrabold text-green-600 text-lg">{workout.title}</div>
            <div className="text-sm flex">
                <div className="font-semibold">Load(kg): </div>
                <div>{workout.load}</div>
            </div>
            <div className="text-sm flex">
                <div className="font-semibold">Reps: </div>
                <div>{workout.reps}</div>
            </div>
            <div className="text-sm">{workout.createdAt}</div>

        </div>
    )
}

export default WorkoutDetails