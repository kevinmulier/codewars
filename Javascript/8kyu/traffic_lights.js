function updateLight(current) {
  const lights = ["green", "yellow", "red"];
  const currentLightIndex = lights.indexOf(current);

  return currentLightIndex < 2 ? lights[currentLightIndex + 1] : lights[0];
}
