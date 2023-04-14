const PetController = require('../controllers/pet.controllers');

module.exports = app => {
    app.get('/api/allPets', PetController.allPets)
    app.post('/api/postPet', PetController.newEntry)
    app.get('/api/onePet/:id', PetController.onePet)
    app.put('/api/updatePet/:id', PetController.updatePet)
    app.delete('/api/adoptPet/:id', PetController.adoptPet)
}