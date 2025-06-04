import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
            <li>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>

            </li>
        </>
    )
}

export default Navbar;