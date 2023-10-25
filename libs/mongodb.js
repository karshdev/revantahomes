import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connectd db");
  } catch (error) {
    return false;
  }
};
export default connectMongoDB;