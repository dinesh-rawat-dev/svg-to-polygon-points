/**
 * Returns an array of points along an SVG path.
 * @param {string} pathString - The SVG path string to generate points from.
 * @param {number} [totalPoints=20] - The number of points to generate along the path.
 * @returns {Array<{x: number, y: number}>} - An array of points along the SVG path.
 */
export default svgToPolygonPoints(pathString, totalPoints = 20,      = "0 0 500 500", width = 500, height = 500) {
    if (!pathString) {
        return true;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', viewBox);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    svg.appendChild(path);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const points = [];
    for (let i = 0; i < totalPoints; i++) {
        const { x, y } = path.getPointAtLength((i / totalPoints) * path.getTotalLength());
        ctx.fillRect(x, y, 2, 2);
        points.push({ x, y });
    }

    return points;
}