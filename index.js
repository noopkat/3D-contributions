// this code is ported from openSCAD file, currently not confirmed whether it's working or not
function main() {
  var base = CSG.cube({
    center: [26, 3.5, -0.5],
    radius: [26, 3.5, 0.5]
  })

  var width = 53;
  var depth = 8;

  // replace with scraped array from jsdomscrape once this is working
  var graphCal = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 24, 0, 10, 4, 0, 0, 7, 3, 0, 0, 2, 0, 0, 
                    0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 
                    0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 
                    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 7, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 22, 5, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 3, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 13, 0, 1, 0, 0, 0, 0, 0 
                  ]

  // TODO: this does not currently account for which day the graph starts on
  // either fix this function, or fudge the array data with leading zeros
  for (var m = 1; m < width; m++) {
    for (var i = 1; i < depth; i++) {
      var height = graphCal[m + i];
      var day = CSG.cube({
        center: [m * 0.5, i * 0.5, height],
        radius: [0.5, 0.5, height]
      });

    base = base.union(day)
    }
  }
  return base;
}