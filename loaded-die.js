function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;
  var whichRoll;
  return function() {
    if (index === list.length) {
      index = 0;
    } else if (index === 0) {
      whichRoll = list[index];
      index++;
    } else {
      whichRoll = list[index];
      index++;
    }
    return whichRoll;
  };var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;
  var whichRoll;
}
var rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());