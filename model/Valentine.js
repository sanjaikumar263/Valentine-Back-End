import mongoose from 'mongoose';


const valentineSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
description: {
type: String,
required: true,
},
image: {
type: String, // Cloudinary URL
},
},
{ timestamps: true }
);


export default mongoose.model('Valentine', valentineSchema);