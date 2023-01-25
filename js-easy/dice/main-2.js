const startBtn = document.getElementById("diceBtn")
const body = document.querySelector("body")
const dice = document.createElement("img")
dice.style.width = "100px"
dice.style.height = "100px"


let diceNum = "./img/saikoro1.png"
// 1回目の.setAttribute　リロードされた時の画像。
dice.setAttribute("src", diceNum)
body.appendChild(dice)


// // サイコロの目ランダム表示の関数
const random = function () {
  diceNum = `./img/saikoro${Math.floor(Math.random()*6 + 1)}.png`
  // 2回目の.setAttributeサイコロランダム表示のため。
  dice.setAttribute("src", diceNum)
}


// ボタンクリック時にサイの目が０.1秒ごとにランダム表
// 変数startBtnがクリックされた時の関数を定義する。
startBtn.addEventListener("click", function () {

  let timer = setInterval("random()", 100)

  // 3秒後にfunction () { clearInterval(timer) }が実行される。
  setTimeout(function () { clearInterval(timer) }, 3000)
})
