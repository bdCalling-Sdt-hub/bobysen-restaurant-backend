import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { menuCategoryRoutes } from "../modules/menuCategory/menuCategory.route";
import { otpRoutes } from "../modules/otp/otp.routes";
import { restaurantRoutes } from "../modules/restaurant/restaurant.route";
const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/otp",
    route: otpRoutes,
  },
  {
    path: "/menu-categories",
    route: menuCategoryRoutes,
  },
  {
    path: "/restaurants",
    route: restaurantRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
