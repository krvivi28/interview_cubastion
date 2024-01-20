import express from "express";

const router = express.Router();
const welcome = async (req, res, next) => {
  res.send("Hey! Good to see you...");
};
router.route("/").get(welcome);

export default router;
