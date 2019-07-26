import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  dailyCigarettes: Number,
  unitPriceCigarette: Number,
  noSmokingStartTime: {
    type: Date,
    default: null
  },
});

const User = mongoose.model('User', userSchema);

export default User;