let cards = []  //<div>card　を入れる
let cardFirst
let flgFirst = true
let count = 0
let timer

window.onload = () => {
  let arr = [];

  for (i = 1; i < 5; i++) {
    arr.push(i);
    arr.push(i);
  }
  shuffle(arr)
  console.log(arr)

  const panel = document.getElementById('panel')

  for (i = 0; i < 8; i++) {
    const div = document.createElement('div')
    div.className = 'card back'
    div.number = arr[i]
    div.innerHTML = ''
    div.onclick = turn
    panel.appendChild(div)
    cards.push(div)
  }
};


const shuffle = (arr) => {
  console.log('test')
  for (let i = arr.length - 1; 0 < i; i--) {
    console.log('test2')
    console.log(i)
    const j = Math.floor(Math.random() * (i + 1))
    console.log(j)
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
};



let selectedDiv

const turn = (e) => {
  selectedDiv = e.target

  if (selectedDiv.innerHTML === '') {
    selectedDiv.className = 'card'
    selectedDiv.innerHTML = selectedDiv.number
  } else {
    return;
  }

  if (flgFirst) { //1枚目に押されたdiv
    cardFirst = selectedDiv
    flgFirst = false
  } else {
    if (cardFirst.number === selectedDiv.number) {
      count++;
      timer = setInterval('cardClear(selectedDiv)', 500);
      if (count === 4) {
        setTimeout(() => {
          alert('終了です')
          document.location.reload();
        }, 500);
      }
    } else {
      timer = setInterval('cardBack(selectedDiv)', 500);
    }
    flgFirst = true
  }
};

const cardBack = (selectedDiv) => {
  selectedDiv.className = 'card back'
  selectedDiv.innerHTML = ''

  cardFirst.className = 'card back'
  cardFirst.innerHTML = ''

  clearInterval(timer)
};

const cardClear = (selectedDiv) => {
  selectedDiv.className = 'card finish'
  cardFirst.className = 'card finish'

  clearInterval(timer)
};


/* sample
let cards = []; //8枚のカードのdiv要素
let flgFirst = true;
let cardFirst;
let count = 0; //=> カードのペアが揃った回数

let setTimer;

window.onload = function load() {
  let arr = []; //11,22,33,44　

  for (i = 1; i < 5; i++) {
    arr.push(i);
    arr.push(i);
  }
  shuffle(arr) //arr[]をランダムに並べ替える

  console.log(arr);
  console.log(arr.length);

  const panel = document.getElementById('panel');

  //8枚のcardを作る。
  for (i = 0; i < 8; i++) {
    const div = document.createElement('div');
    div.className = 'card back';
    div.index = i
    div.number = arr[i] // divの数値にarr[]配列のi番目の数字を代入。カードの数字になる。
    div.innerHTML = '' //数字を表示しない。
    div.onclick = turn //click されたらturn()を呼び出す
    panel.appendChild(div)
    cards.push(div) //cards[]の数字を<div>...<div/>に入れる。
  }
};

const shuffle = function (arr) {

  for (let i = arr.length - 1; 0 < i; i--) { //7回繰り返す?? なぜ8回ではない？ "-1"する意味は？？

    const j = Math.floor(Math.random() * (i + 1)); //1~7の整数。arr[]のindexをランダムに配置するため。
    // console.log("j:"+ j)
    [arr[i], arr[j]] = [arr[j], arr[i]]; //arr[i]=>arr[i]の番目の数字、arr[j]=>arr[j]の番目の数字

    //分割代入構文:左辺は変数、右辺は数値。右辺（数値）を左辺（変数）に代入する。
    //i = arr[i] , j = 1~7 => iにjを代入することで、ランダムに数字を並べることができる。
    console.log("number" + arr[i] + ",(arr.length):" + i)
    console.log("i:" + i, "j:" + j)
  }

};
*/
