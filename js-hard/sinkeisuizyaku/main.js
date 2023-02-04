let cards = []; //8枚のカードのdiv要素
let flgFirst = true;
let cardFirst;
let count = 0; //=> カードのペアが揃った回数

let setTimer;

window.onload = function load() {
  let arr = [];

  for (i = 1; i < 5; i++) {
    arr.push(i);
    arr.push(i);
  }
  shuffle(arr)

  console.log(arr);

  const panel = document.getElementById('panel');

  for (i = 0; i < 8; i++) { //0-7回繰り返す
    const div = document.createElement('div');
    div.className = 'card back';
    div.index = i //<div>*7
    div.number = arr[i] // divの数値にarr[]配列のi番目の数字を代入。カードの数字になる。
    div.innerHTML = '' //defaultは数字を表示しない。
    div.onclick = turn
    panel.appendChild(div)
    cards.push(div) //cards[]の数字を<div>...<div/>に入れる。
  }

};
const test = () => {
  for (let i = 7; 0 < i; i--) {
    console.log(i)
  }
}
test()

const shuffle = function (arr) {

  for (let i = arr.length -1; 0 < i; i--) { //7回繰り返す

    const j = Math.floor(Math.random() * (i + 1)); //0〜iの整数。最大7までの数字が得られる。
    [arr[i], arr[j]] = [arr[j], arr[i]]; //分割代入構文？ 左辺は変数、右辺は数値。右辺（数値）を左辺（変数）に代入する。

    console.log([arr[i], arr[j]])
  }

};


let div

const turn = function (e) {
  div = e.target;

  if (div.innerHTML === '') {
    div.className = 'card'
    div.innerHTML = div.number // => arr[i]
  } else {
    return;
  }

  if (flgFirst) {
    cardFirst = div; //div = createElement('div')
    flgFirst = false;
  } else {
    panel.classList.add('eventNone');
    if (cardFirst.number === div.number) {
      count++;
      setTimer = setInterval('cardClear(div)', 500);
      if (count === 4) {
        setTimeout(function () {
          alert('終了です');
          document.location.reload();
        }, 500);
      }
    } else {
      setTimer = setInterval('cardBack(div)', 500);
    }
    flgFirst = true;
    console.log(count) //=> カードのペアが揃った回数

  }
}

const cardBack = function (div) {
  div.className = 'card back';
  div.innerHTML = '';
  cardFirst.className = 'card back';
  cardFirst.innerHTML = '';
  cardFirst = null;
  backsetTimer = NaN;
  panel.classList.remove('eventNone');
  clearInterval(setTimer);
};

const cardClear = function (div) {
  div.className = 'card finish';
  cardFirst.className = 'card finish';
  panel.classList.remove('eventNone');
  clearInterval(setTimer);
};


/* 質問メモ
分割代入構文
.numbers
.index
cardFirst = null;
  backsetTimer = NaN;
*/
