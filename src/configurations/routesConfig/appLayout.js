import AppLayout from "../../pages/layout/AppLayout";
import OurCompanyRoute from "./routes/app-routes/ourCompanyRoute";
import LocationsRoute from "./routes/app-routes/locationsRoute";
import ContactsRoute from "./routes/app-routes/contactsRoute";
import WebDesignRoute from "./routes/services-routes/webDesignRoute";
import AppDesignRoute from "./routes/services-routes/appDesignRoute";
import GraphicDesignRoute from "./routes/services-routes/graphicDesignRoute";

let Applayout = {
  Component: AppLayout,
  children: [
    OurCompanyRoute,
    LocationsRoute,
    ContactsRoute,
    WebDesignRoute,
    AppDesignRoute,
    GraphicDesignRoute,
  ],
};

export default Applayout;
