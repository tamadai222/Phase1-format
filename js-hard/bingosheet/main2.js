const table = document.getElementById('view')
const setBtn = document.getElementById('hitNum')


const sheetContent = [] //空の配列を用意し、後で数字を生成してpushする。
console.log(sheetContent)

const newSheet = function () {

  const row = 6
  const column = 5

  for (x = 0; x < row; x++) {
    const tr = document.createElement('tr') //row*6
    view.appendChild(tr)
    for (y = 0; y < column; y++) {
      let td = document.createElement('td') //column * 5
      tr.appendChild(td)

      if (x === 0) { //最上段は"BINGO"の文字が入るため、check()は実行しない。
        switch (y) {
          case 0: {
            td.textContent = 'B'
            break
          }
          case 1: {
            td.textContent = 'I'
            break
          }
          case 2: {
            td.textContent = 'N'
            break
          }
          case 3: {
            td.textContent = 'G'
            break
          }
          case 4: {
            td.textContent = 'O'
            break
          }

        }
      } else { //x=1~5 行目はランダムな数字を入れる。
        switch (y) {
          case 0: { //y=0(一番左)
            check(y, td) //y=0, td = <td><td/> を引数として渡す。
            break
          }
          case 1: { //y=0(左から[1]番目)
            check(y, td) // y=1, td = <td><td/> を引数として渡す。
            break
          }
          case 2: {
            if (x === 3) {
              td.textContent = "free"
              td.setAttribute('class', 'hit-num')
              break
            }
            check(y, td)  // y=2, td = <td><td/> を引数として渡す。
            break
          }
          case 3: {
            check(y, td)
            break
          }
          case 4: {
            check(y, td)
            break
          }
        }
      }
      // console.log(td)
    }
  }
}


const check = function (y, td) {  //y,tdを引数で渡して、処理を書く
  while (true) { //whileの意義
    const calc = Math.floor((Math.random() * 15) + (y * 15) + 1)
    if (!sheetContent.includes(calc)) {
      sheetContent.push(calc)
      td.textContent = calc
      td.setAttribute('id', sheetContent.length - 1) //毎回処理が繰り返される。1つの数字を生成するごとに、lengthが＋1される。25個の数字ができるまで繰り返す。0から始まるため-1する。
      break;
    }
  }

}
newSheet();


// チャレンジ問題（自分）
/*
setBtn.addEventListener('click', function (td) {
  let randomNum = Math.floor(Math.random() * 75 + 1)

  alert(`番号は 『${randomNum}』 です！`)
  if (td.textContent == randomNum) {
    td.setAttribute('class', 'hit-num')
  }
})
*/

// チャレンジ問題（解答）
/*
const numLog = []
setBtn.addEventListener('click', function () {
  while (true) {

    let randomNum = Math.floor(Math.random() * 75 + 1)

    if (!numLog.includes(randomNum)) {
      numLog.push(randomNum)
      alert(`番号は 『${randomNum}』 です！`)

      let result = sheetContent.indexOf(randomNum)
      //sheetContent[の中にrandomNumの数字があるか検索し、配列の何番目に当たるか検索する。
      //sheetContent[..., ”randomNum”, ...., .....]　=>　id=1
      console.log("sheetContent.index:" + result + "番目", "randomNum:" + randomNum)
      if (result === -1) { //検索条件に当てはまらない時。ビンゴカードの数字の中にrandomNumの数字がない時
        return;
      } else {
        //sheetContent[]の中のindex番号をidとして取得
        const target = document.getElementById(result) //sheetContent[]の配列のresult番目に当たるid=result
        target.setAttribute('class', 'hit-num')
      }
    }
    break;
  }
})
*/

//チャレンジ問題　再
const numLog = []
setBtn.addEventListener('click', function () {
  let randomNum = Math.floor(Math.random() * 75 + 1)

  if (!numLog.includes(randomNum)) {
    numLog.push(randomNum)
    alert(`番号は『${randomNum}番』です！`)
    const result = sheetContent.indexOf(randomNum)
    console.log("sheetContent index:" + result, "randomNum:" + randomNum)
    if (result === -1) {
      return;
    }
    const target = document.getElementById(result)
    console.log(target)
    target.setAttribute('class', 'hit-num')
  }
})


/*疑問点

const check = function (y, td)/check(y, td)　引数の使い方がわからない。

let td を関数の外でもう一度使いたい時はどうすれば良いか。
<td>のtextContent要素を取得したい時はどうすればいいか。

numLog = []がいる理由
while(true){}で繰り返す理由。
*/

/*チャレンジ問題メモ
「セット」を押すと、1〜75の数字を生成する。　checkNum()
生成した数字をアラート。
=>生成した数と<td>の数字が一生の場合に　.hit-numでCSSを付与する。
if(td.textContent === setNum){
  td.setAttribute('class', 'hit-num')
}
=>sheetContent[]の何番目か＝idの番号
*/
