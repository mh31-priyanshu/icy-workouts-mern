import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex h-24 items-center bg-white">
            <Link to="/">
                <div className="ml-20 font-extrabold text-3xl">Icyy Workouts</div>
            </Link>
        </div>
    )
}

export default Navbar