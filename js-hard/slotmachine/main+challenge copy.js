// slotの setIntervalの変数
let timer1
let timer2
let timer3

// ストップ押した回数の変数
let leftCount = 3

// middle-slotに表示される数字
const nowTime1 = document.getElementById('nowTime1')
const nowTime2 = document.getElementById('nowTime2')
const nowTime3 = document.getElementById('nowTime3')

// スロットの数字の変数
let count1 = 0
let count2 = 0
let count3 = 0

nowTime1.textContent = count1
console.log(nowTime1.textContent)
nowTime2.textContent = count2
nowTime3.textContent = count3

// ストップボタンの取得
const stopBtn1 = document.getElementById('setTime1')
const stopBtn2 = document.getElementById('setTime2')
const stopBtn3 = document.getElementById('setTime3')

// スタートボタン押した時の関数
const startTimer = document.getElementById('startTimer')
startTimer.addEventListener('click', () => {
  clearInterval(timer1)
  clearInterval(timer2)
  clearInterval(timer3)
  stopBtn1.disabled = false
  stopBtn2.disabled = false
  stopBtn3.disabled = false
  slotFunction()
  leftCount = 3
})

const slotFunction = () => {
  // 左・タテのスロットの数字
  timer1 = setInterval(function () {
    if (count1 === 0) {   //"0"の時
      count1 = 0
      nowTime1.textContent = count1
      nowTime4.textContent = 9
      nowTime7.textContent = 1
      count1 += 1

    } else if (count1 === 9) {   //"9"の時
      nowTime1.textContent = count1
      nowTime4.textContent = count1 - 1
      nowTime7.textContent = 0
      count1 = 0

    } else {   //"1~8"の時
      nowTime1.textContent = count1
      nowTime4.textContent = count1 - 1
      nowTime7.textContent = count1 + 1
      count1 += 1

    }
  }, 1000)

  // 真ん中・タテのスロット
  timer2 = setInterval(function () {
    if (count2 === 0) {   //"0"の時
      count2 = 0
      nowTime2.textContent = count2
      nowTime5.textContent = 9
      nowTime8.textContent = 1
      count2 += 1

    } else if (count2 === 9) {   //"9"の時
      nowTime2.textContent = count2
      nowTime5.textContent = count2 - 1
      nowTime8.textContent = 0
      count2 = 0

    } else {   //"1~8"の時
      nowTime2.textContent = count2
      nowTime5.textContent = count2 - 1
      nowTime8.textContent = count2 + 1
      count2 += 1

    }
  }, 1000)

  // 右・タテのスロット
  timer3 = setInterval(function () {
    if (count3 === 0) {   //"0"の時
      count3 = 0
      nowTime3.textContent = count3
      nowTime6.textContent = 9
      nowTime9.textContent = 1
      count3 += 1

    } else if (count3 === 9) {   //"9"の時
      nowTime3.textContent = count3
      nowTime6.textContent = count3 - 1
      nowTime9.textContent = 0
      count3 = 0

    } else {   //"1~8"の時
      nowTime3.textContent = count3
      nowTime6.textContent = count3 - 1
      nowTime9.textContent = count3 + 1
      count3 += 1

    }
  }, 1000)
}


// ストップボタン押した時の関数3つ
stopBtn1.addEventListener('click', () => {
  // ボタンを押したら、押せなくする
  stopBtn1.disabled = true
  clearInterval(timer1)

  // ストップ3回のうち1回消費
  leftCount -= 1
  checkCount()
});

stopBtn2.addEventListener('click', () => {
  stopBtn2.disabled = true
  clearInterval(timer2)
  leftCount -= 1
  checkCount()
});

stopBtn3.addEventListener('click', () => {
  stopBtn3.disabled = true
  clearInterval(timer3)
  leftCount -= 1
  checkCount()
})

// ストップ3回押すとアラートする機能。
const checkCount = function () {
  if (leftCount === 0) {
    leftCount = 3
    if (nowTime1.textContent === nowTime2.textContent &&
      nowTime2.textContent === nowTime3.textContent) {
      alert('おめでとう！')
    } else if
      (nowTime1.textContent === nowTime2.textContent ||
      nowTime2.textContent === nowTime3.textContent ||
      nowTime1.textContent === nowTime3.textContent) {
      alert('惜しい！')

    } else {
      alert('再挑戦')
    }
  }

}

const nowTime4 = document.getElementById('nowTime4')
const nowTime5 = document.getElementById('nowTime5')
const nowTime6 = document.getElementById('nowTime6')
const nowTime7 = document.getElementById('nowTime7')
const nowTime8 = document.getElementById('nowTime8')
const nowTime9 = document.getElementById('nowTime9')

nowTime4.textContent = '9'
nowTime5.textContent = '9'
nowTime6.textContent = '9'
nowTime7.textContent = '1'
nowTime8.textContent = '1'
nowTime9.textContent = '1'
