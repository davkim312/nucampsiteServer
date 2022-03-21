const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    campsite: [{ // the campsite's field properties are enclosed in an array
        type: Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

// model of 'Favorite' is created for data
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;