const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoScehema = new Schema({
    url: {
        type: String,
        required: true,
        trim: true
    }
})

const Video = mongoose.model('Video',videoScehema);
module.exports = Video;