let WebDesignRoute = {
  path: "/web-design",
  async lazy() {
    let { WebDesign } = await import(
      "../../../../pages/service-pages/WebDesign"
    );
    return { Component: WebDesign };
  },
};

export default WebDesignRoute;
