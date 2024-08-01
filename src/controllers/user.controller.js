import asyncHandler from "../../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(500).json({
    message: "Anubhav Singh,(Debuging karne me kafi time laga)",
  });
});

export default registerUser;
