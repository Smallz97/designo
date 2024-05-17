import AppLayout from "../../pages/layout/AppLayout";
import OurCompanyRoute from "./routes/ourCompanyRoute";
import LocationsRoute from "./routes/locationsRoute";
import ContactsRoute from "./routes/contactsRoute";
import WebDesignRoute from "./routes/webDesignRoute";
import AppDesignRoute from "./routes/appDesignRoute";
import GraphicDesignRoute from "./routes/graphicDesignRoute";

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
