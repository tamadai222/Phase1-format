const confirmTime = document.getElementById("confirmTime")
const startTimer = document.getElementById("startTimer")

let sec = 0
let timer

const countUp = function(){
  sec += 1
  console.log(sec)
  if(sec > 40){
    alert("40秒経過しました。再挑戦しよう！")
    clearInterval(timer)
    sec = 0
  }
}

startTimer.addEventListener("click", function(){
  clearInterval(timer)
  timer = setInterval("countUp()", 1000)
})

confirmTime.addEventListener("click", function(){
  if(sec === 20){
    alert("ぴったり20秒＾＾")
  }else if(sec < 20){
    alert(`まだ${sec}秒です！再挑戦しよう！`)
  }else{
    alert(`もう${sec}秒経過してしまいました！再挑戦しよう！`)
  }

  clearInterval(timer)
  sec = 0
})
