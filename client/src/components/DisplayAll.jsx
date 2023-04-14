//Display all adoptable pets. Edit btn and Details btn
import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const {allPets, setAllPets} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then((allPets) => {
                setAllPets(allPets.data)
            })
            .catch ((err) => {
                console.log(err)
            })
    }, [])
    
    return (
        <div className='w-50 mx-auto'>
            <h2>These pets are looking for a good home!</h2>
            <table className="table border mt-4">
                <thead>
                    <tr className="bg-light-subtle text-start">
                        <th className="border">Name</th>
                        <th className="border">Type</th>
                        <th className="border">Actions</th>
                    </tr>
                </thead>
                {
                    allPets.map((pet) => (
                        <tbody key={pet._id}>
                        <tr className="border text-start">
                            <td className="border p-2">{pet.petName}</td>
                            <td className="border p-2">{pet.petType}</td>
                            <td><Link to={`/onePet/${pet._id}`} className='p-2'>details</Link>︱<Link to={`/editPet/${pet._id}`} className='p-2'>edit</Link></td>
                        </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
)}

export default DisplayAll;