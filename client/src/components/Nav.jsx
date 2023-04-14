//Nav bar syntax
import { Link } from "react-router-dom";
import paw from '../components/images/paw.jpg'

const Nav = (props) => { 
    return(
        <div className="d-flex justify-content-between align-items-center p-3 w-75 mx-auto border-bottom mb-5">
            <div>
            <h1 className="d-flex justify-content-align-evenly align-items-center"><img src={paw} alt="Paw Print Logo" style={{width:'30px'}}/>Pet Shelter</h1>
            </div>
            <div className="d-flex justify-content-end grid gap-0 column-gap-3">
                <Link to={'/'} className="p-2 g-col-6">Home</Link>
                <Link to={'/newEntry/form'} className="p-2 g-col-6">Add Pet To The Shelter</Link>
            </div>
        </div>
)}

export default Nav;

