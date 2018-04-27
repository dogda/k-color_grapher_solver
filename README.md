# Graph Coloring Problem Solver and Visualizer

 - Version 1.0.0
 - Written by Kaleb Gaar

## Requirements

 - [node.js](https://nodejs.org/en/download/)

## Setup

To install node packages

```
npm install
```

## CLI Use

To run tests from the command line, use the "runTest" using npm as demonstrated below.

```
npm run runTest [.xcsp file] [(Optional) Heuristic String]
```

By default, the test will run all four heuristics. You can specify the heuristic used by using a tag.

 - 'lex'
 - 'deg'
 - 'wDeg'
 - 'blz'

## Webtool use



## Libraries Used

### node.js

#### Locally Installed Packages

 - [xml2js](https://www.npmjs.com/package/xml2js): for parsing XML to javascript objects
 - [vue-d3-network](https://www.npmjs.com/package/vue-d3-network): for visualizing networks using d3 and connecting it to vue
 
#### Globally Installed Packages

 - [http-server](https://www.npmjs.com/package/http-server): to locally host resources for use with tool
 - [browserify](http://browserify.org/): to package node modules to run on webpage

### vue.js

This library was used to drive the webtool. Find more information here: [Vue](https://vuejs.org/)

## Tests Found

[Link](http://xcsp.org/series)

## Future Plans

 - Implement Conflict Based Backjumping and Forward Checking algorithms for solutions
 - Create static and dynamic heuristics based on variable domains.
 - Create Custom CSPs to better demonstrate heuristics
 - Rewrite graph visualizer to demonstrate colors left in domain
 - Host webtool to server.