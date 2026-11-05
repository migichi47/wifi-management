import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

export const addNewSubscription = async (req, res) => {
  try {
    const { userId, expires } = req.body;
    const foundUser = await User.findById(userId);
    if (!foundUser)
      return res
        .status(404)
        .json({ message: "Could not find user under this id" });

    const subscription = await Subscription.create({
      userId,
      expires,
    });
    res.status(201).json({
      message: "Subscription created successfully",
      subscription,
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not add subscription",
      error: err,
    });
  }
};
