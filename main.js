const getRandom = require('./mathRandom.js')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('最小値はいくつですか？ ', (answer1) => {
  readline.question('最大値はいくつですか？ ', (answer2) => {

    var random = getRandom(answer1,answer2);
    console.log(random);
  
    readline.close();
  });
});
