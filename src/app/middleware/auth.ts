import httpStatus from "http-status";
import jwt, { Secret } from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import config from "../config/index";

const auth = (...userRoles: string[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      console.log("token");
      throw new AppError(httpStatus.UNAUTHORIZED, "you are not authorized!");
    }
    let decode;
    try {
      decode = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, "unauthorized");
    }

    const { role, email } = decode;
    // const isUserExist = User.isUserExist(email);
    // if (!isUserExist) {
    //   throw new AppError(httpStatus.NOT_FOUND, "user not found");
    // }
    if (userRoles && !userRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized ");
    }
    req.user = decode;
    next();
  });
};
export default auth;
