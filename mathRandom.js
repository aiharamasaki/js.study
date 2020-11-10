module.exports = function getRandom( min = 0 , max = 100 ) {
  
  if(isNaN(min,max)==true){
    console.log('引数エラー：数値以外が入力されています');
  }
  else if(min>max){
    console.log('引数エラー：数値を入れ替えて入力してください');
  }
  else{
    maxNumber = Number(max);
    minNumber = Number(min);
    var random = Math.floor( Math.random() * (maxNumber + 1 - minNumber) ) + minNumber;
  return random;
  }
}
