const Pet = require('../models/pet.models')

module.exports = {

    allPets: (request, response) => {
        Pet.find()
            .then((allPets) => {
                response.json(allPets)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    onePet: (request, response) => {
        Pet.findOne({_id: request.params.id})
            .then((onePet) => {
                response.json(onePet)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    newEntry: (request, response) => {
        Pet.create(request.body)
            .then((newPet) => {
                response.json(newPet)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    updatePet: (request, response) => {
        Pet.findOneAndUpdate({_id: request.params.id}, request.body, { new:true, runValidators: true } )
        .then(updatedPet => {
            response.json(updatedPet)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    adoptPet: (request, response) => {
        Pet.deleteOne({ _id: request.params.id })
        .then((res) => {
            response.json(res)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    }

}