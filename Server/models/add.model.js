import mongoose from 'mongoose';
const { Schema } = mongoose;
//comment
const addSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cat: {
        type: String,
        required: true,
      },
    cover: {
        type: String,
        required: true,
      },
    desc: {
      type: String,
      required: true,
    },
    shortDesc: {
        type: String,
        required: false,
      },
    
    
    price: {
      type: Number,
      required: true,
    },
    
    
    availableQuntity: {
      type: Number,
      required: true,
    },
    
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Add', addSchema);
