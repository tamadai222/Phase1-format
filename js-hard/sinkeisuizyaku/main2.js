let cards = []; //<div>card　を入れる
let cardFirst;
let flgFirst = true;
let count = 0;
let timer;

window.onload = () => {
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
		console.log(`selectedDiv.innerHTML:${selectedDiv.innerHTML}`); //=> 押されたカードの数字がコンソールされる。
	} else {
		//カードが表向きの時
		return;
	}

	if (flgFirst) {
		//最初はtrue = 1回目カードが押されると実行される。
		cardFirst = selectedDiv; //1枚目に押されたdivをcardFirstに代入することで、もう一方のselectedDivカードと区別する。
		flgFirst = false; //flgFirst＝false にすることで次の処理に移行する。
	} else {
		//2回目がクリックされた後の処理。
		if (cardFirst.cardNumber === selectedDiv.cardNumber) {
			count++;
			timer = setInterval("cardClear(selectedDiv)", 500);
			if (count === 4) {
				setTimeout(() => {
					alert("終了です");
					document.location.reload();
				}, 500);
			}
		} else {
			timer = setInterval("cardBack(selectedDiv)", 500);
		}
		flgFirst = true;
	}
};

const cardBack = (selectedDiv) => {
	selectedDiv.className = "card back";
	selectedDiv.innerHTML = ""; //cardNumberオブジェクトはそのまま。 cardNumber = arr[]。innerHTML=表示する数字は空にする。

	cardFirst.className = "card back";
	cardFirst.innerHTML = "";

	clearInterval(timer);
};

const cardClear = (selectedDiv) => {
	selectedDiv.className = "card finish";
	cardFirst.className = "card finish";

	clearInterval(timer);
};

