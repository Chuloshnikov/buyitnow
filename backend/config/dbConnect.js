import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.set("stringQuery", false);
    mongoose.connect(process.env.DB_URI);
}

export default dbConnect;