import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { bookingServies } from "./booking.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
const searchTableForBook = catchAsync(async (req: Request, res: Response) => {
  req.body.user = req?.user?.userId;
  const result = await bookingServies.searchTableForbook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Table Find successfully",
    data: result,
  });
});
const getAllBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServies.getAllBookings(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "booking retrived successfully",
    data: result?.data,
    meta: result?.meta,
  });
});
const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServies.getSingleBooking(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "booking retrived successfully",
    data: result,
  });
});

export const bookingControllers = {
  searchTableForBook,
  getAllBooking,
  getSingleBooking,
};
