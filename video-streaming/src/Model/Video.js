import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const model = mongoose.model;

const VideoSchema = new Schema({
    label: {type: String, required: true},
    path: {type: String, required: true},

})


export default model('Video', VideoSchema);
