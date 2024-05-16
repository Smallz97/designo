let ContactsRoute = {
  path: "/contacts",
  async lazy() {
    let { Contacts } = await import(
      "../../../../pages/app-pages/contacts/Contacts"
    );
    return { Component: Contacts };
  },
};

export default ContactsRoute;
