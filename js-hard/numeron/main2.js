let cpNum

const numCheck = document.getElementById('numCheck')
const remainTurn = document.getElementById('remainTurn')

// CP側の異なる3桁の数字
const threeRandomNum = function () {
  let cpNum = [];

  for (let i = 0; cpNum.length < 3; i++) {
    const number = Math.floor(Math.random() * 10)

    if (!cpNum.includes(number)) {
      cpNum.push(number)
    }
  }
  console.log(cpNum)

}

numCheck.addEventListener('click', function () {

  const answerNum = document.getElementById('answerNum').value
  document.getElementById('answerNum').value = ""

  // 入力欄の数字をチェック
  if (answerNum === "") {
    alert('数字を入力してください')
    return
  } else if (answerNum.length > 3) {
    alert('数字は3桁で入力してください')
    return
  } else if
    (answerNum[0] === answerNum[1] ||
    answerNum[1] === answerNum[2] ||
    answerNum[0] === answerNum[2]) {
    alert('同じ数字は2回以上使用できません')
  }

  // 数字の結果判定
  let eat = 0 //3EATで終了＋正解アラート
  let bite = 0 //EATの時は表示しない。

  for (let n = 0; n < answerNum.length; n++) {  //自分の数字を配列[0,1,2]までチェックする
    for (let j = 0; j < cpNum.length; j++) {  //CPの数字を配列[0,1,2]までチェックする
      if (answerNum[n] === cpNum[j]) {  //自分と相手の同じインデックス番号の数字が同じ時
        eat = eat + 1   //0+1, 1+1, 2+1 (j < cpNum.length, answerNum.length  n,jが2になるまで繰り返す。)
      } else {
        bite = bite + 1
      }
    }

    alert`${eat}EAT, ${bite}BITE`
  }

  if (eat === 3) {
    alert('正解です！')
    location.reload()
  }


})



/*
CP側で3桁の数字がそれぞれ異なる数字を1つ生成する。回答が正解するまで（3EAT）数字は変更しない。
  3桁の数字は配列として捉える？？[0, 1, 2]

numCheck　を押すと、
answerNum　の3桁の数字を取得。3桁か、数字が被っていないかチェック。必要に応じてアラート。
  3桁の数字は配列として捉える？？[0, 1, 2]
  桁＋数字が一緒なら：EAT
  数字のみ一緒なら：BITE


*/
