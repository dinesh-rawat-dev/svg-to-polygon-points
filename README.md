# svg-to-polygon-points

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A simple npm module that converts an SVG path string into a polygon points string.

## Installation

```
npm install svg-to-polygon-points
```

## Usage

```
const svgToPolygonPoints = require('svg-to-polygon-points');
const path = 'M100,100 L200,200 L300,100';
const points = svgToPolygonPoints(path);
console.log(points);

[{
  x: 100,
  y: 100
}, {
  x: 110,
  y: 110
}, {
  x: 120,
  y: 120
}, {
  x: 130,
  y: 130
}, {
  x: 140,
  y: 140
}, {
  x: 150,
  y: 150
}, {
  x: 160,
  y: 160
}, {
  x: 170,
  y: 170
}, {
  x: 180,
  y: 180
}, {
  x: 190,
  y: 190
}, {
  x: 200,
  y: 200
}, {
  x: 210,
  y: 190
}, {
  x: 220,
  y: 180
}, {
  x: 230,
  y: 170
}, {
  x: 240,
  y: 160
}, {
  x: 250,
  y: 150
}, {
  x: 260,
  y: 140
}, {
  x: 270,
  y: 130
}, {
  x: 280,
  y: 120
}, {
  x: 290,
  y: 110.00000762939453
}]
```


## API

### svgToPolygonPoints(path)
Converts an SVG path string into a polygon points string.

**Arguments**
path - The SVG path string to convert.
Returns - A polygon points array

## Contributing

Contributions are welcome! Please make a PR.

## License
This project is licensed under the MIT License.
