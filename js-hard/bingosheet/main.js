/*
B の列には 1 ~ 15,
I の列は 16 ~ 30,
N の列には 31 ~ 45,
G の列は 46 ~ 60,
O の列には 61 ~ 75
真ん中は free にする

*/

const sheetContent = []

function newSheet() {
  const table = document.getElementById('view')

  let rowLength = 6 //横の行<tr>0〜5個
  let columnLength = 5 //縦の列　1行の<tr>に0~4個の<td>

  for (x = 0; x < rowLength; x++) {
    const row = document.createElement('tr')
    table.appendChild(row)
    for (y = 0; y < columnLength; y++) {
      let td = document.createElement('td')
      row.appendChild(td)
      if (x === 0) { //0行目の時
        switch (y) { //0行目の<tr>で<td>がｙ番目の時
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
      } else { //2行目の<tr>以降
        switch (y) {
          case 0: { //<td>0番目の時（1番左）
            check(y, td) //y = 0, td = <td>
            break
          }
          case 1: {
            check(y, td)
            break
          }
          case 2: { //<td>2番目の時（真ん中）
            if (x === 3) { //3行目の<tr>の時
              td.textContent = 'Free'
              td.setAttribute('class', 'hit-num')
              break
            }
            check(y, td)
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
    }
  }
}

const check = function (y, td) { //ここで仮引数を(y, td)にして、newSheet()のswitch文で実引数を渡す。
  while (true) {
    let calc = Math.floor(Math.random() * 15 + y * 15 + 1)

    if (!sheetContent.includes(calc)) {
      sheetContent.push(calc)
      td.textContent = calc
      td.setAttribute('id', sheetContent.length - 1)
      break;
    }
  }
}
console.log(sheetContent)
newSheet()

const setBtn = document.getElementById('hitNum')
setBtn.addEventListener('click', function(){

})



/*ランダムな数字の生成方法
    0〜14を作る。
    +1で1から始まる整数にする。
    <tr>0行目は、y*15　＝　1〜15
    Math.random() * 15＋ｙ*15　
      ＝　15＋（y番目＊15）
      ＝　縦列ごとに15を足していく。
    */
