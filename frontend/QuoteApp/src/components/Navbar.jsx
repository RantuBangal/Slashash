
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="d-flex justify-content-around bg-secondary p-4" >
        <Link className="text-white fs-3 text-decoration-none" to={'/'}>Search Page</Link>
        <Link className="text-white fs-3 text-decoration-none" to={'/favourites'}>Favourites</Link>
    </div>
  )
}

export default Navbar