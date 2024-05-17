let WebDesignRoute = {
  path: "/web-design",
  async lazy() {
    let { WebDesign } = await import("../../../pages/services/WebDesign");
    return { Component: WebDesign };
  },
};

export default WebDesignRoute;
