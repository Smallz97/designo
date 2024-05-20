let ContactUsRoute = {
  path: "/contact-us",
  async lazy() {
    let { ContactUs } = await import("../../../pages/app/contact-us/ContactUs");
    return { Component: ContactUs };
  },
};

export default ContactUsRoute;
