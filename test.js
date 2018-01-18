// The second argument/parameter is expected to be a function
function findWaldo(arr, call) {
  arr.forEach(function(names, i){
    if (names === "Waldo") {
      call(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);