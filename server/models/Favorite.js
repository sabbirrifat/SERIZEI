const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    seriesId : {
        type: String
    },
    seriesTitle: {
        type: String
    },
    seriesPost: {
        type: String
    },
    seriesRunTime : {
        type: String
    }


}, { timestamps: true })


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }
