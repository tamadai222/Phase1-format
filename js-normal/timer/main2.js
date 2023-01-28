const setTime = document.getElementById("setTime")
const startTimer = document.getElementById("startTimer")
const stopTimer = document.getElementById("stopTimer")
const nowTime = document.getElementById("nowTime")

let sec = 0

setTime.addEventListener("click", function(){
  const inputTime = document.getElementById("inputTime").value
  sec = inputTime

  nowTime.textContent = `${sec}秒：セット完了しました`
})

const cutDown = function(){
  sec -= 1;
  nowTime.textContent = `${sec}秒`
  if(sec === 0){
    alert("finished")
    clearInterval(timer)
  }
}

let timer
startTimer.addEventListener("click", function(){

  timer = setInterval("cutDown()" ,1000)
})

stopTimer.addEventListener("click", function(){
  clearInterval(timer);
  nowTime.textContent = `${sec}秒：ストップしました`
})
