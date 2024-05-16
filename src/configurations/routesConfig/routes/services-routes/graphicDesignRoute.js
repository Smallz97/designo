let GraphicDesignRoute = {
  path: "/graphic-design",
  async lazy() {
    let { GraphicDesign } = await import(
      "../../../../pages/service-pages/GraphicDesign"
    );
    return { Component: GraphicDesign };
  },
};

export default GraphicDesignRoute;
