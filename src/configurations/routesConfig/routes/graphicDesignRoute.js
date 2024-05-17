let GraphicDesignRoute = {
  path: "/graphic-design",
  async lazy() {
    let { GraphicDesign } = await import(
      "../../../pages/services/GraphicDesign"
    );
    return { Component: GraphicDesign };
  },
};

export default GraphicDesignRoute;
