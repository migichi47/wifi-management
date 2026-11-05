import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
