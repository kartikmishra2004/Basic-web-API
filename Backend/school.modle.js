import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
},{timestamps: true});

const Item = mongoose.model("Item", itemSchema, "students");

export default Item