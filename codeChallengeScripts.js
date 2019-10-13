// Traverse through a directory of 1000 csv files, will be adding more on how to specifically sort through these

var path = `/Users/terencepatane-ronan/Desktop/FOLDER/SUB-FOLDER/ETC...`

function directoryTraverse(path) {
  var fs = require('fs');

  fs.readdir(path, function(err, items) {
      for (var i=0; i<items.length; i++) {
          var file = path + '/' + items[i];
          console.log("Start: " + file);

          fs.stat(file, function(err, stats) {
              console.log(file);
              console.log(stats["size"]);
          });
      }
  })
};

directoryTraverse(path)
