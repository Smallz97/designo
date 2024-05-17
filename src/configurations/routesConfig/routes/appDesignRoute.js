let AppDesignRoute = {
  path: "/app-design",
  async lazy() {
    let { AppDesign } = await import("../../../pages/services/AppDesign");
    return { Component: AppDesign };
  },
};

export default AppDesignRoute;
