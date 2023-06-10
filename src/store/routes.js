import About from "../components/pages/About";
import Admin from "../components/pages/Admin";
import Main from "../components/pages/Main";
import { ABOUT_ROUTE, ADMIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
export const userRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
