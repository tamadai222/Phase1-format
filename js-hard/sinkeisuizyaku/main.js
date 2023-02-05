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

  for (let i = arr.length-1 ; 0 < i; i--) { //7回繰り返す?? なぜ8回ではない？ "-1"する意味は？？

    const j = Math.floor(Math.random() * (i + 1)); //1~7の整数。arr[]のindexをランダムに配置するため。
    [arr[i], arr[j]] = [arr[j], arr[i]]; //arr[i]=>arr[i]の番目の数字、arr[j]=>arr[j]の番目の数字

    //分割代入構文:左辺は変数、右辺は数値。右辺（数値）を左辺（変数）に代入する。
    //i = arr[i] , j = 1~7 => iにjを代入することで、ランダムに数字を並べることができる。
    console.log("number" + arr[i] + ",(arr.length):" + i)
    console.log("i:"+i,"j:"+j)
  }

};

let div

const turn = function (e) {
  div = e.target; //divがclickされた時

  if (div.innerHTML === '') { // => div要素がクリックされた時、innerHTMLが空の時　カードがクローズしていたら
    div.className = 'card'  //.back を除去し、数字を表示させる。
    div.innerHTML = div.number // => arr[i]の数字を代入
  } else {
    return;
  }

  if (flgFirst) { //=> true1回目のクリック
    cardFirst = div; //div = e.target  div要素がクリックされた時の要素=1枚目のcardのdiv
    flgFirst = false;
  } else { //=> false　2回目のクリック
    panel.classList.add('eventNone'); //cardの親要素のdivに".eventNone"クラスを付与する。
    if (cardFirst.number === div.number) { //1枚目にクリックされたtargetのnumber === 2枚目のdiv.number
      count++;
      setTimer = setInterval('cardClear(div)', 500);
      if (count === 4) {
        setTimeout( () => {
          alert('終了です');
          document.location.reload();
        }, 500);
      }
    } else { //clickした時の2つの数字が異なる場合
      setTimer = setInterval('cardBack(div)', 500);
    }
    flgFirst = true;
    console.log(count) //=> カードのペアが揃った回数

  }
};

// 2つのカードの数字が異なり、カードを裏返しに戻す場合。
const cardBack = function (div) { //div = e.target; divがclickされた時の要素
  // もう一方のカード
  div.className = 'card back';
  div.innerHTML = '';
  // 1枚目に選んだカード
  cardFirst.className = 'card back';
  cardFirst.innerHTML = '';

  // cardFirst = null; //値が存在しないようにする。
  // backsetTimer = NaN; //Not-a-Number
  panel.classList.remove('eventNone');
  clearInterval(setTimer);
};

// 2つのカードが正解で、カードを消す時
const cardClear = function (div) {
  // もう一方のカード
  div.className = 'card finish';
  //1枚目に選んだカード
  cardFirst.className = 'card finish';

  panel.classList.remove('eventNone');
  clearInterval(setTimer);
};
