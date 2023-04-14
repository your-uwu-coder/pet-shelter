const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema ({

    petName: {
        type: String,
        minlength: [3, 'Name must be 3 characters or longer'],
        required: [true, 'Name is required']
    },

    petType: {
        type: String,
        minlength: [3, 'Input must be 3 characters or longer'],
        required: [true, 'Price is required']
    },

    petDescription: {
        type: String,
        minlength: [3, 'Description must be 3 characters or longer'],
        required: [true, 'Description is required']
    },

    skillOne: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    }

}, {timestamps:true} )

const Pet = mongoose.model('pet', PetSchema)
module.exports = Pet; 