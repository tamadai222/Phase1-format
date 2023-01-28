const input = document.getElementById("sampleForm")
const countNum = document.getElementById("textCounter")
const resetBtn = document.getElementById("resetBtn")
const goalNum = 400

countNum.textContent = `あと ${goalNum} 文字`


input.addEventListener("keyup", function(){
  console.log("ok")
  countNum.textContent = `あと ${goalNum - (input.value.length)} 文字`
  // inputを文字列１文字が何個あるか数えるために値にする。
  // 頭文字が削除された時、textarea に textarea.slice(1)が代入される。
  textarea = input.value
})

resetBtn.addEventListener("click", function(){
  countNum.textContent = `あと ${goalNum} 文字`

})


// 頭文字
let textarea;

const iniDelBtn = document.getElementById("iniDel")

iniDelBtn.addEventListener("click", function(){
  console.log("ok")
  textarea = textarea.slice(1)
  input.value = textarea

  countNum.textContent = `あと ${goalNum - (input.value.length)} 文字`
})


// 末尾削除
const endDelBtn = document.getElementById("endDel")

endDelBtn.addEventListener("click", function () {
  textarea = textarea.slice(0, -1)
  input.value = textarea

  countNum.textContent = `あと ${goalNum - (input.value.length)} 文字`
})
