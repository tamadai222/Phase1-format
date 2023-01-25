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

addBtn.addEventListener('click',function(){

  const addArea = document.getElementById('add-area').value
  document.getElementById('add-area').value = ''

  if (addArea === ""){
    alert('タスクを入力してください。')
  }else{
    // 「追加」を押すとタスクがリストに追加される。
    const lists = document.getElementById('todo')
    const listItem = document.createElement('li')
    const listText = document.createTextNode(addArea)
    listItem.appendChild(listText)
    lists.appendChild(listItem)

    // タスクに「完了」ボタン付与
    const doneBtn = document.createElement('button')
    doneBtn.innerText = '完了'
    doneBtn.setAttribute('class', 'btn')
    listItem.appendChild(doneBtn)

    // 完了ボタンをすとタスク消える
    doneBtn.addEventListener('click', function () {
      listItem.remove()
    })

  }

})
