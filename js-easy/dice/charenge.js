const playler1Btn = document.getElementById("player1Btn")
const playler2Btn = document.getElementById("player2Btn")
const result = document.getElementById("result")
const setPlayer1dice = document.getElementById("setPlayer1dice")
const setPlayer2dice = document.getElementById("setPlayer2dice")

setPlayer1dice.setAttribute("src", `./img/saikoro1.png`)
setPlayer2dice.setAttribute("src", `./img/saikoro1.png`)

let player1Timer, player2Timer
let player1Stop
let player2Stop

const func1 = () => {
  // .disabled : 任意のHTML要素の属性に付与することで無効化されて一切の反応が得られなくなります。クリックしても反応しないなど
  /*disabled = trueにすると、要素内にdisabled属性が追加されて、
    disabled = falseにすると、要素内からdisabled属性が削除されます。*/
  playler1Btn.disabled = true
  result.textContent = "???"

  player1Timer = setInterval(() => {
    // player1Numで1〜６の乱数生成。
    // setPlayer1diceのsrc属性imgの${}に、player1Numで生成した乱数代入。
    // setIntervalで、サイコロランダム表示100mm秒で実行。
    player1Num = Math.floor(Math.random()* 6 +1)
    setPlayer1dice.setAttribute("src", `./img/saikoro${player1Num}.png`)
  }, 100)

  setTimeout(() =>{
    //Interval:player1Timerをclearする。
    clearInterval(player1Timer)
    // player1Stopは偽
    player1Stop = false

    //？？？？
    if(player1Stop === false && player2Stop === false){
      console.log(player1Num, player2Num)
        // player1Num、player2Numは、1〜６の乱数を生成する変数
      if (player1Num > player2Num){
        result.textContent = "player1の勝ち"
      } else if (player1Num === player2Num){
        result.textContent = "引き分け"
      }else{
        result.textContent = "player2の勝ち"
      }
      // disabled = falseにすると、要素内からdisabled属性が削除されます。
      playler1Btn.disabled = false
      playler2Btn.disabled = false

      // nullとは、オブジェクトが存在しない状態のときの値です。例)player1Stop = null → player1Stopは値なし
      // null」は基本的に、変数の初期化などでよく使われます。
      //player1Stop = false➡︎null
      player1Stop = null
      player2Stop = null

    }
  }, 3000)
}


const func2 = () =>{
  playler2Btn.disabled = true
  result.textContent = "???"
  player2Stop = true

  player2Timer = setInterval( () => {
    player2Num = Math.floor(Math.random() * 6 +1)
    setPlayer2dice.setAttribute("src", `./img/saikoro${player2Num}.png`)
  } , 100)

  setTimeout(() => {
    clearInterval(player2Timer)
    player2Stop = false

    if(player1Stop === false && player2Stop === false){
      if(player1Num > player2Num){
        result.textContent = "player1の勝ち"
      } else if (player1Num === player2Num){
        result.textContent = "引き分け"
      }else{
        result.textContent = "player2の勝ち"
      }

      playler1Btn.disalbe = false
      playler2Btn.disalbe = false
      player1Stop = null
      player2Stop = null

    }
  }, 3000);
}

playler1Btn.addEventListener("click", func1)
playler2Btn.addEventListener("click", func2)
