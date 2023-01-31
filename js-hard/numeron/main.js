let cpNum
let turnNum = 3

const numCheck = document.getElementById('numCheck')
const remainTurn = document.getElementById('remainTurn')
remainTurn.textContent = `残り3回です`

// CP側の異なる3桁の数字
function threeRandomNum(){
  cpNum = [];

  for (let i = 0; cpNum.length < 3; i++) {
    const number = Math.floor(Math.random() * 10)

    if (!cpNum.includes(number)) {
      cpNum.push(number)
    }
  }
  console.log(cpNum)
}
threeRandomNum()  //必ず関数を呼び出す。下の関数でcpNumが定義されていないことになるため。
console.log(cpNum.length)

/*
for文は繰り返す回数が決まっている
while文では繰り返す回数がわからないが条件を満たすまで繰り返す。breakを使って繰り返し処理を抜ける
*/

 /*
 while (true) {
  cpNum = String(Math.floor(Math.random() * 900 + 100))
  if (cpNum[0] !== cpNum[1] && cpNum[1] !== cpNum[2] && cpNum[0] !== cpNum[2]) {
    break;
  }
}
 console.log(cpNum)
 */


numCheck.addEventListener('click', function () {


  const answerNum = document.getElementById('answerNum').value
  document.getElementById('answerNum').value = ""

  // 入力欄の数字をチェック
  if (answerNum === "") {
    alert('数字を入力してください')
    return
  } else if (answerNum.length !== 3) {
    alert('数字は3桁で入力してください')
    return
  } else if
    (answerNum[0] === answerNum[1] ||
    answerNum[1] === answerNum[2] ||
    answerNum[0] === answerNum[2]) {
    alert('同じ数字は2回以上使用できません')
    return
  }

  // 残りの回数をカウント
  turnNum -= 1
  console.log(turnNum)

  // 数字の結果判定
  let eat = 0 //3EATで終了＋正解アラート
  let bite = 0 //EATの時は表示しない。

  for (let n = 0; n < answerNum.length; n++) {
    for (let j = 0; j < cpNum.length; j++) {
      console.log("answer " + typeof answerNum[n], "cp " + typeof cpNum[j]);  //typeof でデータ型がわかる
      if (answerNum[n] == cpNum[j]) { //配列の数字(文字列）が等しい　==にすることで、データ型がStringかNumberでも問わない。
        if (n === j) { //配列の数字(文字列）が等しい && 配列のインデックス＝桁も等しい時
          eat = eat + 1
        } else {
          bite = bite + 1
        }
      }
    }
  }
  alert(`${eat}EAT, ${bite}BITE`)

  // 残り回数のアラート
  if(turnNum === 0){
    alert(`正解は${cpNum}でした。`)
    turnNum = 10
    remainTurn.textContent = `残り10回です`
    location.reload()
  }else{
    remainTurn.textContent = `残り${turnNum}回です`
  }

  if (eat === 3) {
    alert('正解です！')
    location.reload()
  }


})

/*
for の中のforの場合、1つ目のforの条件の時に、2つ目のforの条件を全て処理する。
for(i = 0; i < 3; i++){
  for(j = 0; j < 3; j++){
    console(i,j)
  }
}
=>i:0 {j:0,1,2}
  i:1 {j:0,1,2}
  i:2 {j:0,1,2}

*/

/*
=== 論理演算子3つの時はデータ型も一緒じゃなければtrueにはならないが、
== のときはデータの型は問わない。
  */
