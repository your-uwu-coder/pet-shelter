// DELETE - details page for one pet and adopt btn
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './OnePet.css';

const OnePet = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/onePet/${id}`)
            .then((res) => {
                console.log(res.data)
                setPet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/adoptPet/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex justify-content-between mb-4'>
                <h2>Details about: {pet.petName}</h2>
                <button className='btn btn-danger' onClick={deleteHandler}>Adopt Me!🏠</button>
            </div>
                <table className='table text-start border border-dark d-flex p-3 m-9'>
                    <tbody>
                        <tr>
                            <td className='font-weight-bold'>Pet Type:</td>
                            <td>{pet.petType}</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>{pet.petDescription}</td>
                        </tr>
                        <tr>
                            <td>Skills:</td>
                                <td className='d-flex flex-column'>{pet.skillOne}</td>
                                <td className='d-flex flex-column'>{pet.skillTwo}</td>
                                <td className='d-flex flex-column'>{pet.skillThree}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    
)}

export default OnePet;