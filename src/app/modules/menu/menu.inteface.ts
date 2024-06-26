import { Model, ObjectId } from "mongoose";
export interface TReview {
  user: ObjectId;
  restaurant: ObjectId;
  booking: ObjectId;
  rating: number | string;
  comment: string;
}
export interface TMenu {
  category: ObjectId;
  restaurant: ObjectId;
  name: string;
  image: string;
  description?: string;
  price: number;
  owner: ObjectId;
  available: boolean;
  isDeleted: boolean;
}
export interface MenuModel extends Model<TMenu> {}
