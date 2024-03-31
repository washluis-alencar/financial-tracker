const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected')
    } catch (error) {
        console.error(`Db connection error: ${error.message}`);
    }
}

module.exports = {connectDB};