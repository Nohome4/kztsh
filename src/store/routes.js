import About from "../components/pages/About";
import Admin from "../components/pages/Admin";
import Contacts from "../components/pages/Contacts";
import Info from "../components/pages/Info";
import Main from "../components/pages/Main";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  INFO_ROUTE,
  MAIN_ROUTE,
} from "../utils/consts";
export const userRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: INFO_ROUTE,
    Component: Info,
  },
  {
    path: "/management",
    Component: Contacts,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
