/*
  参考（https://programmercollege.jp/column/9113/）
*/
var stop1
var stop2
var stop3

// スタートボタン押した時の関数
const startTimer = document.getElementById('startTimer')
startTimer.addEventListener('click', () => {

  startTimer.disabled = true
  start1();
  start2();
  start3();
})

// const slot = document.getElementsByClassName('slot')

// スタート押した時に、3つのスロットの数字表示
function start1() {
  const nowTime1 = document.getElementById('nowTime1')
  const nowTime4 = document.getElementById('nowTime4')
  const nowTime7 = document.getElementById('nowTime7')
  // 0-9が順番に表示されるようにする。9になったら0に戻る。
  nowTime1.textContent = Math.floor(Math.random() * 10)
  nowTime4.textContent = Math.floor(Math.random() * 10)
  nowTime7.textContent = Math.floor(Math.random() * 10)

 }

  // var stop1 にsetTimeout を入れておくことで、clearTimeoutで再度呼び出せる。
  // stop1 = setTimeout(start1, 100)

function start2() {
  const nowTime2 = document.getElementById('nowTime2')
  const nowTime5 = document.getElementById('nowTime5')
  const nowTime8 = document.getElementById('nowTime8')
  nowTime2.textContent = Math.floor(Math.random() * 10)
  nowTime5.textContent = Math.floor(Math.random() * 10)
  nowTime8.textContent = Math.floor(Math.random() * 10)
  stop2 = setTimeout(start2, 100)
};

function start3() {
  const nowTime3 = document.getElementById('nowTime3')
  const nowTime6 = document.getElementById('nowTime6')
  const nowTime9 = document.getElementById('nowTime9')
  nowTime3.textContent = Math.floor(Math.random() * 10)
  nowTime6.textContent = Math.floor(Math.random() * 10)
  nowTime9.textContent = Math.floor(Math.random() * 10)
  stop3 = setTimeout(start3, 100)
};


// ストップボタンの取得
const stopBtn1 = document.getElementById('setTime1')
const stopBtn2 = document.getElementById('setTime2')
const stopBtn3 = document.getElementById('setTime3')

// ストップボタン押した時の関数3つ
stopBtn1.addEventListener('click', () => {
  clearTimeout(stop1)
  // ボタンを押したら、押せなくする
  stopBtn1.disabled = true
});

stopBtn2.addEventListener('click', () => {
  clearTimeout(stop2)
  stopBtn2.disabled = true
});

stopBtn3.addEventListener('click', () => {
  clearTimeout(stop3)
  stopBtn3.disabled = true

  // 3つ目のストップボタンを押した後に、結果をアラートする
  // 3つ目のボタンを最初に押した場合は、先に結果がアラートされてしまう。。。
  if (nowTime1 === nowTime2 && nowTime1 === nowTime3) {
    alert('ビンゴ！')
  } else {
    alert('再挑戦')
    click = 0
    startTimer.disabled = false
    stopBtn1.disabled = false
    stopBtn2.disabled = false
    stopBtn3.disabled = false
  }

});

const middleSlot = () => {
  setInterval(() => {
    let count1 = 0
    if (count1 === 0) {
      count1 = 0
      nowTime1.textContent = count1
      count1 += 1
    } else if (count1 === 9) {
      count1 = 0
      nowTime1.textContent = count1
    } else {
      nowTime1.textContent = count1
      count1 += 1
    }
  }, 100)
  console.log(count1)
}
