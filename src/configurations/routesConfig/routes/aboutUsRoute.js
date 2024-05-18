let AboutUsRoute = {
  path: "/about-us",
  async lazy() {
    let { AboutUs } = await import("../../../pages/app/about-us/AboutUs");
    return { Component: AboutUs };
  },
};

export default AboutUsRoute;
