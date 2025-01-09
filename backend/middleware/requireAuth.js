import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

/* 
  Success:
    next()
  
  Error checks include:
    500 -> Other errors
*/
export const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(errorHandler("401", "User Not Authorized"));
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET_CODE);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    return errorHandler(500, "Request Denied");
  }
};
