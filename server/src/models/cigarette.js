import mongoose from 'mongoose';

const cigarettesSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now 
  },
});

const Cigarette = mongoose.model('Cigarette', cigarettesSchema);

export default Cigarette;