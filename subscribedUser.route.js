const express = require("express");
const router = express.Router();
const SubscribedEmailModel = require("./subscribedUser.model");

//create subscription
router.post("/", async (req, res) => {
  try {
    const { userEmailId } = req.body;
    const newEmail = new SubscribedEmailModel({
      userEmailId: userEmailId,
    });
    await newEmail.save();
    res.json({ newEmail });
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});

//get all the subscribed user
router.get("/", async (req, res) => {
  try {
    const subscribedUSersEmail = await SubscribedEmailModel.find();
    res.json({ subscribedUSersEmail });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
