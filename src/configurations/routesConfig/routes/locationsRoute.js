let LocationsRoute = {
  path: "/locations",
  async lazy() {
    let { Locations } = await import("../../../pages/app/locations/Locations");
    return { Component: Locations };
  },
};

export default LocationsRoute;
