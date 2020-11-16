/**
 * 引数の範囲内でランダムで出力した数値を返す
 * @param {number} min
 * @param {number} max
 * @return {number|undefined}
 */

module.exports = function getRandom( min = 0 , max = 100 ) {
  if(isNaN(min) || isNaN(max)){
    console.log('引数エラー：数値以外が入力されています');
    return
  }
  else if(min>max){
    console.log('引数エラー：数値を入れ替えて入力してください');
    return
  }
  else{
    const random = Math.floor( Math.random() * (Number(max) + 1 - Number(min)) ) + Number(min);
  return random;
  }
}
