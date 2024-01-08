import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NumberSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone_number: String,
    update_at: Date,
    exported_at: Date
});

const PHNumber = mongoose.model('User', NumberSchema);

export default PHNumber;