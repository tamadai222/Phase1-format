/*
・input にタスクを入力し、取得。
・add-btnを押したらタスクに追加される。
・<ul> に　<li>要素、 <button>要素　を追加する
・タスク＋「完了」ボタンを表示する。完了ボタンを押すとタスクが消える。

// createTextNode
// parentNode
// this
*/

const addBtn = document.getElementsByClassName('add-btn')[0]

addBtn.addEventListener('click', function () {
  addElement();
  delElement();
})

// タスクをとボタンを表示させる関数addElement
const addElement = function () {
  const addArea = document.getElementById('add-area')

  if (addArea.value === "") {
    alert('タスクを入力してください。')
  } else {
    // 「追加」を押すとタスクがリストに追加される。
    const lists = document.getElementById('todo')
    const listItem = document.createElement('li')
    const listText = document.createTextNode(addArea.value)
    listItem.appendChild(listText)
    lists.appendChild(listItem)

    // タスクに「完了」ボタン付与（1つのfunctionにまとめる）
    const doneBtn = document.createElement('button')
    doneBtn.innerText = '完了'
    doneBtn.setAttribute('class', 'btn')
    listItem.appendChild(doneBtn)
  }
  addArea.value = ''

}

// 完了ボタンをすとタスク消える（1つのfunctionにまとめる）
const delElement = function () {
  const delBtn = document.getElementsByClassName('btn')

  for (let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener('click', function(){
      const li = this.parentNode
      li.remove()
    })
  }

  // doneBtn.addEventListener('click', function () {
  //   // listItemを外で定義しているため、完了ボタンでも使いたい場合は、btnクラスを取得し、parentNodeで親要素をremoveする。
  //   const aList = document.querySelector('li')
  // })
}
