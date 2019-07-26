import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    achived: Boolean,
    daysToAchive: Number,
});

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;