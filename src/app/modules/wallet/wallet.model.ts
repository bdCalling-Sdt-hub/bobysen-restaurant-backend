import mongoose, { model } from "mongoose";
import config from "../../config";
import bcrypt from "bcrypt";
import { TWallet } from "./wallet.interface";
const { Schema } = mongoose;

const walletSchema = new Schema<TWallet>(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "vendor information is required"], // Added 'required' keyword
    },
    // amount means total sells by the vendor and we calculate due for avilable balance and withdraw
    amount: {
      type: Number,
      required: [true, "amount is required"],
      default: 0,
    },
    due: {
      type: Number,
      default: 0,
    },
    totalPaid: {
      type: Number,
      default: 0,
    },
    lastPaymentDate: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    paymentHistory: [
      {
        percentage: Number,
        subTotal: Number,
        method: String,
        amount: Number,
        date: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const Wallet = model<TWallet>("Wallet", walletSchema);
