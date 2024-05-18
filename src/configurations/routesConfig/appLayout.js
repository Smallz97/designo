import AppLayout from "../../components/Layout/AppLayout";
import OurCompanyRoute from "./routes/ourCompanyRoute";
import LocationsRoute from "./routes/locationsRoute";
import ContactsRoute from "./routes/contactsRoute";
import AboutUsRoute from "./routes/aboutUsRoute";
import WebDesignRoute from "./routes/webDesignRoute";
import AppDesignRoute from "./routes/appDesignRoute";
import GraphicDesignRoute from "./routes/graphicDesignRoute";

let Applayout = {
  Component: AppLayout,
  children: [
    OurCompanyRoute,
    LocationsRoute,
    ContactsRoute,
    AboutUsRoute,
    WebDesignRoute,
    AppDesignRoute,
    GraphicDesignRoute,
  ],
};

export default Applayout;
