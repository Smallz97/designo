let ContactsRoute = {
  path: "/contacts",
  async lazy() {
    let { Contacts } = await import("../../../pages/app/contacts/Contacts");
    return { Component: Contacts };
  },
};

export default ContactsRoute;
