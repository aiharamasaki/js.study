module.exports = function getRandom( min = 0 , max = 100 ) {
  console.log(min,max);
  
  if(isNaN(min,max)==true){
    console.log('引数エラー：数値以外が入力されています');
  }
  else if(min>max){
    console.log('引数エラー：数値を入れ替えて入力してください');
  }
  else{
  var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  return random;
  }
}
