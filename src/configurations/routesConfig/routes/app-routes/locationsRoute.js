let LocationsRoute = {
  path: "/location",
  async lazy() {
    let { Locations } = await import("../../../../pages/app-pages/locations/Locations");
    return { Component: Locations };
  },
};

export default LocationsRoute;
