import About from "../components/pages/About";
import Admin from "../components/pages/Admin";
import Appeals from "../components/pages/Appeals";
import Contacts from "../components/pages/Contacts";
import Distribution from "../components/pages/Distribution";
import Documents from "../components/pages/Documents";
import Info from "../components/pages/Info";
import Jobs from "../components/pages/Jobs";
import Main from "../components/pages/Main";
import Partners from "../components/pages/Partners";
import PriceList from "../components/pages/PriceList";
import ProductsList from "../components/pages/ProductsList";
import Reporting from "../components/pages/Reporting";
import Requisites from "../components/pages/Requisites";
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
  {
    path: "/requisites",
    Component: Requisites,
  },
  {
    path: "/price-list",
    Component: PriceList,
  },
  {
    path: "/product-list",
    Component: ProductsList,
  },
  {
    path: "/appeals",
    Component: Appeals,
  },
  {
    path: "/distribution",
    Component: Distribution,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
