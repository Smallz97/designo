let AppDesignRoute = {
  path: "/app-design",
  async lazy() {
    let { AppDesign } = await import(
      "../../../../pages/service-pages/AppDesign"
    );
    return { Component: AppDesign };
  },
};

export default AppDesignRoute;
