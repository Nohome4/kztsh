import About from "../components/pages/About";
import Admin from "../components/pages/Admin";
import Contacts from "../components/pages/Contacts";
import Documents from "../components/pages/Documents";
import Info from "../components/pages/Info";
import Jobs from "../components/pages/Jobs";
import Main from "../components/pages/Main";
import Partners from "../components/pages/Partners";
import Reporting from "../components/pages/Reporting";
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
  {
    path: "/reporting",
    Component: Reporting,
  },
  {
    path: "/documents",
    Component: Documents,
  },
  {
    path: "/jobs",
    Component: Jobs,
  },
  {
    path: "/partners",
    Component: Partners,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
