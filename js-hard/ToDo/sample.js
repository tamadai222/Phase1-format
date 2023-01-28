const buttonClass = document.getElementsByClassName('add-btn')

buttonClass[0].addEventListener('click', function () {
  addElement()
  delElement()
})

// inputの文字取得し、<li>の子要素にわたす。class="lists"の子要素に <li> 生成。追加ボタンの生成。
const addElement = function () {
  // input の文字を取得。
  const listText = document.getElementById('add-area')
  const text = document.createTextNode(listText.value)

  if (listText.value === '') {
    alert("リストを入力してください")
    // returnがないとからでも<li>が生成されてしまい、完了ボタンだけ出力される。
    return
  }

  // <li> を生成し、子要素にconst text を代入。
  const li = document.createElement('li')
  li.appendChild(text)

  //<ul>を取得し、const liを代入。＝ul>li>text
  const lists = document.getElementById('todo')
  lists.appendChild(li)

  // 完了ボタン付与。classをつけることで、後からタスクを消去する時に、classのインデックスを指定できる！
  const trash = document.createElement('button')
  trash.classList.add('trash')
  trash.innerHTML = '完了'
  li.appendChild(trash)

  // 全ての最後に入力欄を空にする。
  listText.value = ''

}

const delElement = function () {
  const trash = document.getElementsByClassName('trash')

  for (i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', function () {
      // thisはtrash[i]にあたる
      const li = this.parentNode
      li.remove()
    })

  }
}
