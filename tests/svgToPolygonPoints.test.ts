/**
 * @jest-environment jsdom
 */
const { svgToPolygonPoints } = require('../src/index');
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

describe('svgToPolygonPoints', () => {
  test('returns an array of points', () => {
    const path = dom.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M 100 100 L 200 200');
    const points = svgToPolygonPoints(path);
    expect(Array.isArray(points)).toBe(true);
    expect(points.length).toBeGreaterThan(0);
    expect(points[0]).toHaveProperty('x');
    expect(points[0]).toHaveProperty('y');
  });

  test('generates correct number of points', () => {
    const path = dom.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M 100 100 L 200 200');
    const totalPoints = 5;
    const points = svgToPolygonPoints(path, totalPoints);
    expect(points.length).toBe(totalPoints);
  });

  test('works with complex paths', () => {
    const path = dom.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M 100 100 Q 200 50 300 100 T 500 100');
    const points = svgToPolygonPoints(path);
    expect(points.length).toBeGreaterThan(0);
  });
  
  test('returns empty array when passed a null path', () => {
    const points = svgToPolygonPoints(null);
    expect(Array.isArray(points)).toBe(true);
    expect(points.length).toBe(0);
  });
});
