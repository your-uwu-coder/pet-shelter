//CREATE - Pet form to add furbabies for adoption
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PetForm = (props) => {
    const navigate = useNavigate()
    const {allPets, setAllPets} = props
    const [error, setError] = useState({})
    const [pet, setPet] = useState({
        petName: '',
        petType:'',
        petDescription:'',
        skillOne:'',
        skillTwo:'',
        skillThree:''
    })

    const changeHandler = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setPet(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const submitHandler = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postPet', pet)
            .then ((res) => {
                console.log(res.data)
                setAllPets([...allPets, res.data])
                navigate('/')
            })
            .catch ((err) => {
                console.log(err)
                setError(err.response.data.errors)
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Know a pet needing a home?</h2>
            <form className='border d-flex justify-content-around' onSubmit={submitHandler}>
                <div className='d-flex flex-column text-start'>
                    <div className='mb-3 mt-3'>
                    <label className='form-label'>Name:</label>
                        <input type="text" className="form-control" name='petName' value={pet.petName} onChange={changeHandler}/>
                        {
                            error.petName? 
                            <p className="text-danger">{error.petName.message}</p>:
                            null
                        }
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Type:</label>
                            <input type="text" className="form-control" name='petType' value={pet.petType} onChange={changeHandler}/>
                            {
                            error.petType? 
                            <p className="text-danger">{error.petType.message}</p>:
                            null
                        }
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Description:</label>
                            <input type="text" className="form-control" name='petDescription' value={pet.petDescription} onChange={changeHandler}/>
                        {
                            error.petDescription? 
                            <p className="text-danger">{error.petDescription.message}</p>:
                            null
                        }
                    </div>
                    <button className='btn btn-primary mb-3'>📁 Add Pet</button>
                </div>

                <div className='d-flex flex-column text-start'>
                    <div className='mb-3'>
                        <p className='fst-italic'>Skills (optional):</p>
                            <label className='form-label'>Skill 1:</label>
                            <div className=''>
                                <input type="text" className="form-control" name='skillOne' value={pet.skillOne} onChange={changeHandler}/>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Skill 2:</label>
                            <div className=''>
                                <input type="text" className="form-control" name='skillTwo' value={pet.skillTwo} onChange={changeHandler}/>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Skill 3:</label>
                            <div className=''>
                                <input type="text" className="form-control" name='skillThree' value={pet.skillThree} onChange={changeHandler}/>
                            </div>
                        </div>
                </div>
            </form>
        </div>    
)}

export default PetForm;