import mongoose from "mongoose";

export const connectDB = async () => {
      await mongoose.connect('mongodb+srv://pratikdhulubulu:DustinDivu%231224@cluster0.2cu29.mongodb.net/QuickServe-FoodDeliveryApp')
            .then(() => {
                  console.log("DB Connected");
            })
            .catch((err) => {
                  console.error("DB Connection Error:", err);
            });

}