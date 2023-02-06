let cards = []; //<div>card　を入れる
let cardFirst;
let flgFirst = true;
let count = 0;
let timer;

// チャレンジ問題ーーーーーーーーーーーーーーーーーーーーーー
const nextPlayer = document.getElementById("nextPlayer");
const player1Point = document.getElementById("player1Point");
const player2Point = document.getElementById("player2Point");
let player1_count = 0;
let player2_count = 0;
let playerTurn = true;
// チャレンジ問題ここまでーーーーーーーーーーーーーーーーーーーー

window.onload = () => {
	nextPlayer.textContent = "次は『player1』の番です";
	player1Point.textContent = "player1: 0";
	player2Point.textContent = "player2: 0";

	let arr = [];

	for (i = 1; i < 5; i++) {
		arr.push(i);
		arr.push(i);
	}
	shuffle(arr);
	console.log(arr);

	const panel = document.getElementById("panel");

	for (i = 0; i < 8; i++) {
		const div = document.createElement("div");
		div.className = "card back";
		div.cardNumber = arr[i]; //.cardNumber というオブジェクトを勝手に生成している。propertyではない。
		div.innerHTML = "";
		div.onclick = turn;
		panel.appendChild(div);
		cards.push(div);
		// console.log(`div.cardNumber:${div.cardNumber}`);
	}
};

const shuffle = (arr) => {
	for (let i = arr.length - 1; 0 < i; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
};

let selectedDiv;

const turn = (e) => {
	selectedDiv = e.target;

	if (selectedDiv.innerHTML === "") {
		//clickされた時、カードのinner.HTMLが空だったら＝裏返しだった時
		selectedDiv.className = "card"; //カードのクラスを.card のみにし数字を表示させる。
		selectedDiv.innerHTML = selectedDiv.cardNumber; //
		// console.log(`selectedDiv.innerHTML:${selectedDiv.innerHTML}`); //=> 押されたカードの数字がコンソールされる。
	} else {
		//カードが表向きの時
		return;
	}

	if (flgFirst) {
		//最初はtrue = 1回目カードが押されると実行される。
		cardFirst = selectedDiv; //1枚目に押されたdivをcardFirstに代入することで、もう一方のselectedDivカードと区別する。
		flgFirst = false; //flgFirst＝false にすることで次の処理に移行する。
	} else {
		// チャレンジ問題ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
		if (playerTurn) {
			//player1のターン
			if (cardFirst.cardNumber === selectedDiv.cardNumber) {
				count++;
				player1_count++;
				player1Point.textContent = `player1: ${player1_count}`;

				timer = setInterval("cardClear(selectedDiv)", 500);
				console.log(playerTurn);

				if (count === 4) {
					setTimeout(() => {
						alert("終了です");
						if (player1_count > player2_count) {
							alert("player1 の勝ち");
						} else if (player1_count === player2_count) {
							alert("引き分け");
						} else if (player2_count > player1_count) {
							alert("player2 の勝ち");
						}
						document.location.reload();
					}, 500);
				}
			} else {
				timer = setInterval("cardBack(selectedDiv)", 500);
				playerTurn = false;
			}
		} else {
			//player2のターン
			if (cardFirst.cardNumber === selectedDiv.cardNumber) {
				count++;
				player2_count++;
				player2Point.textContent = `player2: ${player2_count}`;

				timer = setInterval("cardClear(selectedDiv)", 500);

				if (count === 4) {
					setTimeout(() => {
						alert("終了です");
						if (player1_count > player2_count) {
							alert("player1 の勝ち");
						} else if (player1_count === player2_count) {
							alert("引き分け");
						} else if (player2_count > player1_count) {
							alert("player2 の勝ち");
						}
						document.location.reload();
					}, 500);

				}
			} else {
				timer = setInterval("cardBack(selectedDiv)", 500);
				playerTurn = true;
			}
		}
		flgFirst = true;
		if (playerTurn) {
			console.log("player1");
		} else {
			console.log("player2");
		}
	}
	// チャレンジ問題ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

};

const cardBack = (selectedDiv) => {
	selectedDiv.className = "card back";
	selectedDiv.innerHTML = ""; //cardNumberオブジェクトはそのまま。 cardNumber = arr[]。innerHTML=表示する数字は空にする。

	cardFirst.className = "card back";
	cardFirst.innerHTML = "";

	clearInterval(timer);

	// チャレンジ問題ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	if (playerTurn) {
		alert("次は『player1』の番です");
		nextPlayer.textContent = "次は『player1』の番です";
	} else {
		alert("次は『player2』の番です");
		nextPlayer.textContent = "次は『player2』の番です";
	}
	// チャレンジ問題ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
};

const cardClear = (selectedDiv) => {
	selectedDiv.className = "card finish";
	cardFirst.className = "card finish";
	clearInterval(timer);
};

/*// チャレンジ問題
nextPlayerはplayer1から始める

*player1が間違えたら(！cardFirst.cardNumber === selectedDiv.cardNumber)=> play2にうつる。
  -player2が間違えたら(！cardFirst.cardNumber === selectedDiv.cardNumber)=> player1にうつる。
  -player2が正解(カードが2回押される && cardFirst.cardNumber === selectedDiv.cardNumber)ならそのままplayer2のターン。count++,player2_count++
    textContent(”player2： ${player2_count} 回正解”)


*player1が正解ならplayer1のターンのまま。 count++,player1_count++
  textContent(”player1： ${player2_count} 回正解”)

count===4 で（終了です）アラート。

playerTurn = true =>player1
					 = false => player2

	if(playerTurn){
		//player1
			if(！cardFirst.cardNumber === selectedDiv.cardNumber){
				playerTurn = false;
			}else if(cardFirst.cardNumber === selectedDiv.cardNumber){

			}

	}else {
		//player2の処理

	}
*/
