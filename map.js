var words = ["ground", "control", "to", "major", "tom"];

function map(input, callback){
  newArray = [];
  for(var i = 0; i < input.length; i++) {
    newArray.push(callback(input[i]));
  }
  return newArray;
}

words1 = map(words, function(word) {
  return word.length;
});

console.log(words1);

words2 = map(words, function(word) {
  return word.toUpperCase();
});

console.log(words2);

words3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(words3);
