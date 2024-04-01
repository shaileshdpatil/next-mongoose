import mongoose from "mongoose";
const {MONGO_USERNAME,MONGO_PASSWORD,MONGO_CLUSTOR,MONGO_APPNAME} = process.env;

export const dbConnect = async () => {
    try {
        const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTOR}.zokdvyt.mongodb.net/mongooseDB?retryWrites=true&w=majority&appName=${MONGO_APPNAME}`
        await mongoose.connect(MONGO_URL);
    } catch (e) {
        Error("Error while establiting connection");
    }
};

export default dbConnect;