/**
 * Returns an array of points along an SVG path.
 * @param {string} pathString - The SVG path string to generate points from.
 * @param {number} [totalPoints=20] - The number of points to generate along the path.
 * @returns {Array<{x: number, y: number}>} - An array of points along the SVG path.
 */
export default svgToPolygonPoints(pathString, totalPoints = 20, width = 500, height = 500) {
    if (!pathString) {
      return true;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //@ts-ignore
    svg.setAttribute("width", width);
    //@ts-ignore
    svg.setAttribute("height", height);
    document.body.appendChild(svg);


    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    svg.appendChild(path);

    // Get the bounding box of the path
    const bbox = path.getBBox();

    // Translate the path to the center of the viewBox
    const translateX = -bbox.x - bbox.width / 2 + width / 2;
    const translateY = -bbox.y - bbox.height / 2 + height / 2;
    path.setAttribute('transform', `translate(${translateX}, ${translateY})`);

    // Calculate the scale factor to fit the path within the viewBox
    const scaleFactor = Math.min(width / bbox.width, height / bbox.height);

    // Scale the path down to fit within the viewBox
    path.setAttribute('transform', `translate(${translateX}, ${translateY}) scale(${scaleFactor})`);


    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const box = path.getBBox();
    const scale = Math.min(width / box.width, height / box.height);
    const offsetX = (width - box.width * scale) / 2;
    const offsetY = (height - box.height * scale) / 2;

    const points = [];
    for (let i = 0; i < totalPoints; i++) {
      const { x, y } = path.getPointAtLength((i / totalPoints) * path.getTotalLength());
      const scaledX = (x - box.x) * scale + offsetX;
      const scaledY = (y - box.y) * scale + offsetY;
      ctx.fillRect(scaledX, scaledY, 2, 2);
      points.push({ x: scaledX, y: scaledY });
    }

    return points;
  }