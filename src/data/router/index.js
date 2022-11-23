import PageCompanies from "../../view/components/pages/PageCompanies";
import PageNewsItem from "../../view/components/pages/PageNewsItem";
import { COMPANIES_ROUTE, NEWS_ITEM_ROUTE } from "./utils/utils_publicRoutes";

export const publicRoutes = [
  {
    path: COMPANIES_ROUTE,
    Component: PageCompanies,
  },
  {
    path: NEWS_ITEM_ROUTE,
    Component: PageNewsItem,
  },
];
